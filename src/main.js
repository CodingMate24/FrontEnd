import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import  axios ,  { isCancel ,  AxiosError }  from  'axios' ;
import router from '@/router';

createApp(App).use(router).mount('#app');
//.use(BootstrapVue)

//Vue.prototype.$axios = axios;
//app.config.globalProperties.$axios = axios;

