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