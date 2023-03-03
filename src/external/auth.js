import { getConfig } from "../config/config"
import { store } from '../store/store'
import axios from "axios"

function callService() {

    const addr = getConfig().gatewayService.host + "/routes"
    alert(addr)

    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    axios.get(addr)
        .then(function (response) {
            store.token = response
            alert(store.token)
        })


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