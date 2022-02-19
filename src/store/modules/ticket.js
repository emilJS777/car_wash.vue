import _request from "@/store/modules/_request";


const ticket = {
    namespaced: true,
    actions: {
        // ONLY FOR ADMIN USER
        async get_tickets(context){
            const data = await _request.actions.REQUEST(context, "/ticket/owner", "GET")
            console.log(data)
            context.commit("SET_TICKETS", data.obj)
            return data
        },
        async create_ticket(context){
            const data = await _request.actions.REQUEST(context, "/ticket", "POST")
            console.log(data)
            return data
        },
        async delete_ticket(context, id){
            const data = await _request.actions.REQUEST(context, "/ticket/"+id, "DELETE")
            console.log(data)
            return data
        },
        // ACTIVATE OR DEACTIVATE TICKET
        async update_ticket(context, ticket_id){
            const data = await _request.actions.REQUEST(context, "/ticket/"+ticket_id, "PUT")
            console.log(data)
            return data
        }
    },
    mutations: {
        SET_TICKETS(state, payload){
            state.TICKETS = payload
        }
    },
    state: {
        TICKETS: []
    },
    getters: {
        GET_TICKETS: state => state.TICKETS
    }
}


export default ticket