import _request from "@/store/modules/_request";


const ticket = {
    namespaced: true,
    actions: {
        // ONLY FOR ADMIN USER
        async get_engineer_tickets(context){
            const data = await _request.actions.REQUEST(context, "/ticket/engineer", "GET")
            console.log(data)
            context.commit("SET_ENGINEER_TICKETS", data.obj)
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
        SET_ENGINEER_TICKETS(state, payload){
            state.ENGINEER_TICKETS = payload
        }
    },
    state: {
        ENGINEER_TICKETS: []
    },
    getters: {
        GET_ENGINEER_TICKETS: state => state.ENGINEER_TICKETS
    }
}


export default ticket