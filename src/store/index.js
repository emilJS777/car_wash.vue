import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex)

// MODULES
import request from "./modules/_request";
import auth from "./modules/auth";
import user from "./modules/user";
import ticket from "./modules/ticket";
import device from "./modules/device"
import device_payment from "./modules/device_payment";
import email from "./modules/email"

export default new Vuex.Store({
    namespaced: true,
    modules: {
        request,
        auth,
        user,
        ticket,
        device,
        device_payment,
        email,
    }
})
