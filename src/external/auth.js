import { getConfig } from "../config/config"
import { store } from '../store/store'
import axios from "axios"

function callServiceGetToken(username, password) {

    const addr = getConfig().gatewayService.host + "/administration-service/token"

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
            store.token = response.data["data"].data.token
            store.user.username = username
        }).catch()


    return ""
}

function callServiceCreateUser(username, password) {

    const addr = getConfig().gatewayService.host + "/administration-service/user"

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
            store.user.username = username
        }).catch()


    return ""
}

export function getToken(username, password) {
    // call auth service
    // const tok = getConfig.gateway.host

    if (username != "") {

        const tok = callServiceGetToken(username, password)

        return tok
    }

    return ""
}

export function createUser(username, password) {
    // call auth service
    // const tok = getConfig.gateway.host

    if (username != "") {

        const msg = callServiceCreateUser(username, password)

        return msg
    }

    return ""
}