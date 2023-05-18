import { store } from '../store/store'
import axios from "axios"

async function callServiceGetSpecificFile(key) {

    const addr = "http://localhost:8081/data/" + store.user.username + "/" + key

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + store.token,
        "Accept": "*/*",
        "Connection": "keep-alive",
        "Accept-Encoding": "gzip"
    }

    // axios({
    //     method: "GET",
    //     url: addr,
    //     withCredentials: false,
    //     headers: headers,
    //     responseType: "blob"
    // })
    //     .then(function (response) {
    //         console.log("download file")
    //         store.selectedFile = response.data
    //         return store.selectedFile;
    //     }).catch()

    try {
        const response = await axios.get(addr, {
            withCredentials: false,
            headers: headers,
            responseType: "blob" // Set the response type to 'blob'
        });

        console.log("Download file");
        return response.data; // Return the response data directly
    } catch (error) {
        console.error("Error retrieving file:", error);
        throw error; // Re-throw the error to be handled by the caller
    }


    return store.selectedFile
}
export async function getSpecificFile(key) {

    console.log("download function called ", key)

    const response = await callServiceGetSpecificFile(key);

    const blob = new Blob([response]);

    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'download_file.jpeg'); // Set the desired file name and extension
    document.body.appendChild(link);
    link.click();



    return ""
}

function callServiceGetUsersFiles() {

    const addr = "http://localhost:8081/data/" + store.user.username

    console.log("get user files function called")

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + store.token
    }

    axios({
        method: "GET",
        url: addr,
        withCredentials: false,
        headers: headers,
    })
        .then(function (response) {
            console.log("files got ", response)
            store.files = response.data.data;
            store.temp_loaded = true;
        }).catch()


    return ""
}

export function getUserFiles() {


    callServiceGetUsersFiles()



    return ""
}


function callServiceUploadUserFile(fileData) {

    const addr = "http://localhost:8081/data/" + store.user.username

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*",
        "Authorization": "Bearer " + store.token,
        "Content-Type": "image/jpeg",
        // "Content-Type": "image/jpeg",
        "Transfer-Encoding": "chunked"
    }

    axios({
        method: "POST",
        url: addr,
        withCredentials: false,
        headers: headers,
        data: fileData
    })
        .then(function (response) {
            store.temp_loaded = false;
            console.log(response);
        }).catch()


    return ""
}

export function uploadFile(key) {

    console.log("upload function called", key)


    callServiceUploadUserFile(key);




    return ""
}