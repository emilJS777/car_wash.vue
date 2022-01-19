import router from "@/router";

export default function auth ({ next, store }){
    store.dispatch("auth/get_profile").then(() => {
        if(store.getters["auth/GET_PROFILE"] === null)
            router.push({path: '/sign_in'})
        else
            return next()
    })
}