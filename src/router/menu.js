import {Transaction} from "@/router/Transaction.js";

export class Menu {
    static setMenu(method, url, param){
        debugger;

        const menuList = Transaction.sendTransaction('GET','/api/menu/menuList' , {'st':'11'});
        console.log("menu 111 >> ", menuList);
    }
}