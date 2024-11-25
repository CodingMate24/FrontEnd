// router/index.js
import {createRouter, createWebHistory} from "vue-router";
import {Transaction} from "@/router/Transaction.js";

debugger;

const menuList = await Transaction.sendTransaction('GET','/api/menu/menuList' , {'st':'11'});
console.log("aaaa >> ", menuList);

const router = createRouter({
    "history": createWebHistory(""),
    "routes":  [
        {
            menu: "/"
            , name: "home"
            , component: () => import("../pages/login.vue")
            , title : "로그인"
            , icon : ""
            , menuType : "S"
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../pages/login.vue"),
            title : "로그인",
            icon : "",
            menuType : "S"
        },
        {
            path: "/findpass",
            name: "findpass",
            component: () => import("../pages/findpass.vue"),
            title : "비밀번호 찾기",
            icon : "",
            menuType : "S"
        },
        {
            path: "/main",
            name: "main",
            component: () => import("../pages/main.vue"),
            title : "홈",
            icon : "house",
            menuType : "M"
        },
        {
            path: "/find",
            name: "find",
            component: () => import("../pages/find/find.vue"),
            title : "검색",
            icon : "magnifying-glass",
            menuType : "M"
        },
        {
            path: "/write",
            name: "write",
            component: () => import("../pages/main.vue"),
            title : "만들기",
            icon : "plus",
            menuType : "M"
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("../pages/main.vue"),
            title : "프로필",
            icon : "user",
            menuType : "M"
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("../pages/main.vue"),
            title : "로그아웃",
            icon : "",
            menuType : "S"
        },
    ],
});

export default router;
