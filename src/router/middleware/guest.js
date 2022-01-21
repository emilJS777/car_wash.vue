import router from "@/router";

export default async function guest ({ next, store }){
    store.dispatch("auth/get_profile").then(() => {
        if(store.getters["auth/GET_PROFILE"])
            router.push({path: '/home'})
        else
            return next()
    })
}