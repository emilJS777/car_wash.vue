import _request from "@/store/modules/_request";

const email = {
    namespaced: true,
    actions: {
        async create_email_by_ticket_id(context, body) {
            const data = await _request.actions.REQUEST(context, '/email', 'POST', body)
            return data
        },
        async send_ticket_code_by_email_id(context, email_id){
            const data = await _request.actions.REQUEST(context, '/email/send_ticket_code_by_email_id/'+email_id, 'GET')
            return data
        }
    }
}


export default email
