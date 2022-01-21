import _request from "@/store/modules/_request";

const user = {
    namespaced: true,
    actions: {
        // ONLY FOR ADMIN USER
        async get_engineer_users(context){
            const data = await _request.actions.REQUEST(context, "/user/engineer")
            console.log(data)
            return data
        },
        async get_user_by_id(context, user_id){
            const data = await _request.actions.REQUEST(context, "/user/"+user_id, "GET")
            console.log(data)
            return data
        },
        async create_user(context, form){
            const data = await _request.actions.REQUEST(context, "/user", "POST", form)
            console.log(data)
            return data
        }
    }
}


export default user