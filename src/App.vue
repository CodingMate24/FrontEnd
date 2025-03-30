<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref, onBeforeMount} from "vue";
import Router from "@/router/index.js";

export default {
  name: 'App',
  components : {Header, Footer, FontAwesomeIcon},
  setup() {
    const routes = ref([]);

    onBeforeMount(()=>{
          routes.value = Router.options.routes;
        }

    )
    return{routes};
  },
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
   color: #2c3e50;
  min-width: 540px;
}

header {
  padding-left: 30px;
  padding-top: 15px;
  padding-bottom: 15px;
}

.big-logo {
  background: url('@/assets/logo_3.png') no-repeat -0px -0px;
  width: 156px;
  height: 35px;
  margin: 0px;
}

footer {
  padding-left: 30px;
  padding-top: 15px;
}
</style>