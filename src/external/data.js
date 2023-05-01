import { store } from '../store/store'
import axios from "axios"

function callServiceGetSpecificFile(key) {

    const addr = "http://localhost:8081/data/" + store.user.username + "/" + key

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
    }

    axios({
        method: "GET",
        url: addr,
        withCredentials: false,
        headers: headers,
    })
        .then(function (response) {
            console.log("download file")
            store.selectedFile = response.data.data
        }).catch()


    return ""
}

function callServiceGetUsersFiles() {

    const addr = "http://localhost:8081/data/" + store.user.username

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
    }

    axios({
        method: "GET",
        url: addr,
        withCredentials: false,
        headers: headers,
    })
        .then(function (response) {
            store.files = response.data.data
        }).catch()


    return ""
}

export function getUserFiles() {


    callServiceGetUsersFiles()



    return ""
}
export function getSpecificFile(key) {

    console.log("function called")

    callServiceGetSpecificFile(key)

    var fs = require('browserify-fs');

    const content = 'Some content!';

    fs.mkdir('/home', function () {
        fs.writeFile('/home/hello-world.txt', 'Hello world!\n', function () {
            fs.readFile('/home/hello-world.txt', 'utf-8', function (err, data) {
                console.log(data);
            });
        });
    });



    return ""
}