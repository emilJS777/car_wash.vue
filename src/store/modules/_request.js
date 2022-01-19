import Axios from "axios";
import store from "@/store";
const api_url = "http://127.0.0.1:5000/api"


const REFRESH = (payload) => {
    return Axios({
        url: api_url+'/auth',
        method: "PUT",
        headers: {"Authorization": "Bearer " + store.getters["request/GET_REFRESH"]}
    }).then(data => {
        store.commit("request/SET_TOKENS", data.data.obj)
        return store.dispatch("request/REQUEST", payload)
    }).catch(err => {
        if(err.response.status === 422 || err.response.status === 401)
            store.commit("auth/SET_PROFILE", null)
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
                 headers: {"Authorization": "Bearer " + store.getters["request/GET_ACCESS"]}
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
    },
    getters: {
        GET_ACCESS: () => localStorage.getItem("access"),
        GET_REFRESH: () => localStorage.getItem("refresh")
    }
}


export default request