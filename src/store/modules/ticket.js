import _request from "@/store/modules/_request";

const ticket = {
    namespaced: true,
    actions: {
        async create_ticket(context){
            const data = await _request.actions.REQUEST(context, "/ticket", "POST")
            console.log(data)
            return data
        },
        async delete_ticket(context, id){
            const data = await _request.actions.REQUEST(context, "/ticket/"+id, "DELETE")
            console.log(data)
            return data
        }
    }
}


export default ticket