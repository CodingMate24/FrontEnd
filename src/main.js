import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import  axios ,  { isCancel ,  AxiosError }  from  'axios' ;
import router from '@/router';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {Transaction} from "@/router/Transaction.js";

const AxiosInst = axios.create({
    baseURL : 'http://localhost:8080'
})

// 모든 요청을 intercept 해서 header값 설정(토큰)
// : Axios request일때 이 설정값을 사용한다는 것
AxiosInst.interceptors.request.use(
    (config) => {
        let access_token = store.getters.getToken;
        if(access_token) {
            config.headers.authorization = '${access_token}';
        }
        config.headers['Access-Control-Allow-Origin'] = '*';  // CORS 설정(모든 리소스 허용)
        return config;
    }
)
export default AxiosInst;

library.add(fas, far, fab)

const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app');

app.provide("Transaction" , new Transaction);