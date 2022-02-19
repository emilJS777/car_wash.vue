import _request from "@/store/modules/_request";


const device_payment = {
    namespaced: true,
    actions: {
        async get_device_payment_ids(context) {
            const data = await _request.actions.REQUEST(context, '/device_payment', 'GET')
            return data
        },
        async get_device_payment_by_id(context, payment_id) {
            const data = await _request.actions.REQUEST(context, '/device_payment/'+payment_id, 'GET')
            return data
        },
    }
}


export default device_payment