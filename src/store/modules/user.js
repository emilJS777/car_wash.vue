import _request from "@/store/modules/_request";

const user = {
    namespaced: true,
    actions: {
        async create_user(context, form){
            const data = await _request.actions.REQUEST(context, "/user", "POST", form)
            console.log(data)
            return data
        }
    }
}


export default user