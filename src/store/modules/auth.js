import _request from "@/store/modules/_request";
import store from "@/store";

const auth = {
    namespaced: true,
    actions: {
        async login(context, form) {
            const data = await _request.actions.REQUEST(context, '/auth', 'POST', form)
            if(data.success)
                store.commit("request/SET_TOKENS", data.obj)
            return data
        },
        async get_profile(context){
            const data = await _request.actions.REQUEST(context, '/auth', 'GET')
            if(data.success)
                context.commit("SET_PROFILE", data.obj)
            else
                context.commit("SET_PROFILE", null)
        }
    },
    mutations: {
        SET_PROFILE(state, payload){
            state.PROFILE = payload
        }
    },
    state:{
        PROFILE: {
            first_name: null,
            last_name: null,
            role_name: null,
            name: null
        }
    },
    getters: {
        GET_PROFILE: state => state.PROFILE
    }
}


export default auth