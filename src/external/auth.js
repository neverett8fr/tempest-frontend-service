import { getConfig } from "../config/config"
import { store } from '../store/store'
import axios from "axios"

function callService() {

    const addr = getConfig().gatewayService.host + "/administration-service/token"
    alert(addr)

    const headers = {
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
    }

    const body = {
        "username": username,
        "password": password
    }

    axios({
        method: "POST",
        url: addr,
        withCredentials: false,
        headers: headers,
        data: body
    })
        .then(function (response) {
            store.token = response.data
            alert(store.token)
        }).catch()


    return ""
}

export function getToken(username, password) {
    // call auth service
    // const tok = getConfig.gateway.host

    if (username != "") {

        const tok = callService()

        return tok
    }

    return ""
}