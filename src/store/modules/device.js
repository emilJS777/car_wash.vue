import _request from "@/store/modules/_request";

const device = {
    namespaced: true,
    actions: {
        async create_device(context, body) {
            const data = await _request.actions.REQUEST(context, '/device', 'POST', body)
            return data
        },
        async change_device_active(context, body){
            const data = await _request.actions.REQUEST(context, '/device/active', 'PUT', body)
            return data
        },
        async delete_device(context, device_id) {
            const data = await _request.actions.REQUEST(context, '/device/'+device_id, 'DELETE')
            return data
        },
        async get_device_ids(context){
            const data = await _request.actions.REQUEST(context, '/device', 'GET')
            return data
        },
        async get_device_by_id(context, device_id){
            const data = await _request.actions.REQUEST(context, '/device/'+device_id, 'GET')
            return data
        },
        async get_device_ids_by_owner_id(context, owner_id){
            const data = await _request.actions.REQUEST(context, '/device/by_owner_id/'+owner_id, 'GET')
            return data
        },
        async get_device_ids_by_car_wash_id(context, car_wash_id){
            const data = await _request.actions.REQUEST(context, '/device/by_car_wash_id/'+car_wash_id, 'GET')
            return data
        }
    }
}


export default device
