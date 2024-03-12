// router/index.js
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
          path: "/"
        , name: "home"
        , component: () => import("../login/login.vue"),
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../login/login.vue"),
        },
        {
            path: "/findPass",
            name: "findPass",
            component: () => import("../findPass/findPass.vue"),
        },
    ],
});
export default router;
