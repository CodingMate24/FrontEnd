// router/index.js
import {createRouter, createWebHistory} from "vue-router";
import {Transaction} from "@/router/Transaction.js";

const menuList = await Transaction.sendTransaction('GET','/api/menu/menuList' , {'st':'11'});

// 기본 라우트 설정
const routes = [
    {
        menu: "/error"
        , name: 'error'
        , component: () => import(`@/pages/login.vue`)
        , title: "ERROR PAGES"
        , icon: ""
        , menuType: "S"
        , path: '/error'
    },
];

const router = createRouter({
    history: createWebHistory(""),
    routes,
        /*
        [
        {
            menu: "/"
            , name: "home"
            , component: () => import("../pages/login.vue")
            , title : "로그인"
            , icon : ""
            , menuTypes : "S"
        },
        {
            path: "/login",
            name: "login",
            component: () => import("../pages/login.vue"),
            title : "로그인",
            icon : "",
            menuTypes : "S"
        },
        {
            path: "/findpass",
            name: "findpass",
            component: () => import("../pages/findpass.vue"),
            title : "비밀번호 찾기",
            icon : "",
            menuTypes : "S"
        },
        {
            path: "/main",
            name: "main",
            component: () => import("../pages/main.vue"),
            title : "홈",
            icon : "house",
            menuTypes : "M"
        },
        {
            path: "/find",
            name: "find",
            component: () => import("../pages/find/find.vue"),
            title : "검색",
            icon : "magnifying-glass",
            menuTypes : "M"
        },
        {
            path: "/write",
            name: "write",
            component: () => import("../pages/main.vue"),
            title : "만들기",
            icon : "plus",
            menuTypes : "M"
        },
        {
            path: "/profile",
            name: "profile",
            component: () => import("../pages/main.vue"),
            title : "프로필",
            icon : "user",
            menuTypes : "M"
        },
        {
            path: "/logout",
            name: "logout",
            component: () => import("../pages/main.vue"),
            title : "로그아웃",
            icon : "",
            menuTypes : "S"
        },
    ],
     */
});

// 동적으로 라우트를 추가하는 함수
export function addDynamicRoute() {
    for(let i=0; i<menuList.length; i++){
        const menuComp = menuList[i].menuComponent;

        if(menuList[i].menuName === "find" || menuList[i].menuName === "result"){
            const menuItem = {
                menu: menuList[i].menuUrl
                , name: menuList[i].menuName
                , component: () => import(`@/pages/find/${menuComp}.vue`)
                , title: menuList[i].menuTitle
                , path: menuList[i].menuUrl
            }

            // 라우터에 동적 라우트 추가
            router.addRoute(menuItem);
        } else {
            const menuItem = {
                menu: menuList[i].menuUrl
                , name: menuList[i].menuName
                , component: () => import(`@/pages/${menuComp}.vue`)
                , title: menuList[i].menuTitle
                , path: menuList[i].menuUrl
            }
            // 라우터에 동적 라우트 추가
            router.addRoute(menuItem);
        }

    }
}

export function addArr() {
    for(let i=0; i<menuList.length; i++){
        const menuItem = {
            menu: menuList[i].menuUrl
            , name: menuList[i].menuName
            , title: menuList[i].menuTitle
            , icon: menuList[i].menuIcon
            , menuType: menuList[i].menuType
        }

        // 라우터에 동적 라우트 추가
        routes.push(menuItem);
    }
}

export default router;
