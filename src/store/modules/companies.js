import _request from "@/store/modules/_request";

const device = {
    namespaced: true,
    actions: {
        async get_companies(context) {
            const data = await _request.actions.REQUEST(context, '/car_wash', 'GET')
            return data
        },
        async get_companies_by_id(context, company_id) {
            const data = await _request.actions.REQUEST(context, '/car_wash/'+company_id, 'GET')
            return data
        },
        async create_company(context, body) {
            const data = await _request.actions.REQUEST(context, '/car_wash', 'POST', body)
            return data
        },
        async get_company_ids_by_owner_id(context, owner_id){
            const data = await _request.actions.REQUEST(context, '/car_wash_ids/by_owner_id/'+owner_id, 'GET')
            return data
        }
    }
}


export default device
