import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// Middlewares
import middlewarePipeline from './middleware/middlewarePipeline'
import auth from "./middleware/auth"
import guest from "./middleware/guest"

Vue.use(Router)

// VIEWS
import signIn from "@/views/sign_in"
import signUp from "@/views/sign_up"
import home from "@/views/home"
import createUser from "@/views/create_user";
import owners from "@/views/owners"
import add_device from "@/views/add_device"
import devices from "@/views/devices"
import devices_payment_notifications from "@/views/devices_payment_notifications";
import companies from "@/views/companies";
import add_company from "@/views/add_company"

const router = new Router({
    mode: "history",
    routes: [
        {
            path: '/sign_in',
            name: 'sign_in',
            component: signIn,
            meta: {
                middleware: [
                    guest
                ]
            },
        },
        {
            path: '/sign_up',
            name: 'sign_up',
            component: signUp,
            meta: {
                middleware: [
                    guest
                ]
            },
        },
        {
            path: '/home',
            name: 'home',
            component: home,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/create_user',
            name: 'create_user',
            component: createUser,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/owners',
            name: 'owners',
            component: owners,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/add_device',
            name: 'add_device',
            component: add_device,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/devices',
            name: 'devices',
            component: devices,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/devices_payment_notifications',
            name: 'devices_payment_notifications',
            component: devices_payment_notifications,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/companies',
            name: 'companies',
            component: companies,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/add_company',
            name: 'add_company',
            component: add_company,
            meta: {
                middleware: [
                    auth
                ]
            },
        },
        {
            path: '/*',
            name: 'other',
            component: home,
            meta: {
                middleware: [
                    auth
                ]
            },
        }
    ]
})


router.beforeEach((to, from, next) => {
    if (!to.meta.middleware) {
        return next()
    }
    const middleware = to.meta.middleware
    const context = {
        to,
        from,
        next,
        store
    }
    return middleware[0]({
        ...context,
        next: middlewarePipeline(context, middleware, 1)
    })
})

export default router
