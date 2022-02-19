import Axios from "axios";
import store from "@/store";
const api_url = "http://127.0.0.1:5000/api"


const REFRESH = (payload) => {
    return Axios({
        url: api_url+'/auth',
        method: "PUT",
        headers: {"Authorization": "Bearer " + localStorage.getItem("refresh")}
    }).then(data => {
        store.commit("request/SET_TOKENS", data.data.obj)
        return store.dispatch("request/REQUEST", payload)
    }).catch(err => {
        if(err.response.status === 422 || err.response.status === 401)
            store.commit("auth/SET_PROFILE", {name: null, first_name: null, last_name: null, role_name: null})
        return err
    })
}

const request = {
    namespaced: true,
    actions: {
         REQUEST(context, path, method, body){
             return Axios({
                 url: api_url+path,
                 method: method,
                 data: body || {},
                 headers: {"Authorization": "Bearer " + localStorage.getItem("access")}
             }).then(data => data.data).catch(err => {
                 if(err.response.status === 401 || err.response.status === 422)
                     return REFRESH({path, method, body})
                 return err.response.data
             })
        },

    },
    mutations: {
        SET_TOKENS(context, payload){
            localStorage.setItem("access", payload.access_token)
            localStorage.setItem("refresh", payload.refresh_token)
        }
    }
}


export default request
