import _request from "@/store/modules/_request";


const device_payment = {
    namespaced: true,
    actions: {
        async get_device_payment_ids(context, filter) {
            const data = await _request.actions.REQUEST(context,
                `/device_payment?device_id=${filter.device_id? filter.device_id : ''}&car_wash_id=${filter.company_id? filter.company_id : ''}`,
                'GET')
            return data
        },
        async get_device_payment_by_id(context, payment_id) {
            const data = await _request.actions.REQUEST(context, '/device_payment/'+payment_id, 'GET')
            return data
        },
    }
}


export default device_payment
