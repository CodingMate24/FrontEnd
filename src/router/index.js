// router/index.js
import {createRouter, createWebHistory} from "vue-router";

const router = createRouter({
    history: createWebHistory(""),
    routes: [
        {
              path: "/"
            , name: "home"
            , component: () => import("../pages/login.vue")
            , title : "로그인"
            , icon : ""
            , menu : false
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../pages/login.vue"),
            title : "로그인",
            icon : "",
            menu : false
    },
        {
            path: "/findpass",
            name: "findpass",
            component: () => import("../pages/findpass.vue"),
            title : "비밀번호 찾기",
            icon : "",
            menu : false
        },
        {
            path: "/main",
            name: "main",
            component: () => import("../pages/main.vue"),
            title : "홈",
            icon : "house",
            menu : true
        },
        {
            path: "/find",
            name: "find",
            component: () => import("../pages/find/find.vue"),
            title : "검색",
            icon : "magnifying-glass",
            menu : true
        },
        {
            path: "/write",
            name: "write",
            component: () => import("../pages/main.vue"),
            title : "만들기",
            icon : "plus",
            menu : true
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("../pages/main.vue"),
            title : "프로필",
            icon : "user",
            menu : true
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("../pages/main.vue"),
            title : "로그아웃",
            icon : "",
            menu : false
        },
    ],
});
export default router;
