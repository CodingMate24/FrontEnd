<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref, onBeforeMount} from "vue";
import Router from "@/router/index.js";
import router from "@/router/index.js";

export default {
  computed: {
  },
  components: {FontAwesomeIcon},
  setup(){
    const routes = ref([])

    onBeforeMount(()=>{
      routes.value = Router.options.routes;
    })

    return{routes};
  },
}
</script>

<template>
  <div id="left-section">
    <div id="sidebar" class="row">
      <div class="col">
        <div class="nav flex-column" v-for="route in routes.filter((c) => c.menu === true)" :key="route">
          <router-link :to="route.path" class="nav-item"><font-awesome-icon class="fa-1x icon-tmp" :icon="route.icon"/><span>{{route.title}}</span></router-link>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <ul class="nav flex-column">
          <router-link to="/logout" class="nav-item"><font-awesome-icon class="fa-1x icon-tmp" icon="arrow-right-from-bracket"/><span>로그아웃</span></router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
  #left-section {
    padding-top: 50px;
    padding-left: 30px;
    max-width: 300px;
    border-right: #dee2e6 solid 1px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-decoration: none;
  }

  #sidebar {
    max-width: 300px;
    height: 700px;
  }

  .nav-item {
    max-width: 200px;
    margin-top: 10px;
    height: 35px;
    padding: 0;
    text-decoration: none;
    color : #282828;
  }

  .nav-item > span {
    //border: #dee2e6 solid 1px;
    font-size: 15px;
    margin: 0 20px;
    visibility: visible;
  }

  @media (max-width:980px) {
    .nav-item > span {
      visibility: hidden;
    }
  }

  @media (min-width:200px) and (max-width:480px) {
    #left-section {
      padding-left: 20px;
    }
  }

  .nav-item:hover {
    cursor: pointer;
    font-weight: bold;
  }
</style>