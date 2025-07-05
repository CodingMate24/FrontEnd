<script>

import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref, onBeforeMount} from "vue";
import Router from "@/router/index.js";

export default {
  computed: {
  },
  components: {FontAwesomeIcon},
  setup(){
    const routes = ref([]);

    onBeforeMount(()=>{
      routes.value = Router.options.routes;
    }

    )
    return{routes};
  },
  methods:{

  }
}
</script>

<template>
  <div id="leftsection">
    <div id="sidebar">
      <div class="nav flex-column">
        <div class="nav flex-column" v-for='route in routes.filter((c) => c.menuType === "M")' :key="route">
        <router-link :to="route.menu" class="nav-item"><font-awesome-icon class="fa-1x icon-tmp" :icon="route.icon"/><span class="menu-item">{{route.title}}</span></router-link>
        </div>
      </div>
    </div>
    <!--    <router-link to="/logout" class="nav-item position-absolute bottom-0" style="margin-bottom: 10%;"><font-awesome-icon class="fa-1x icon-tmp" icon="arrow-right-from-bracket"/><span>로그아웃</span></router-link>-->
  </div>
</template>

<style>
/* LeftSection Start */
@media (min-width:1053px) {
  #leftsection {
    padding-left: 30px;
  }
}
#leftsection {
  max-width: 300px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-decoration: none;
}

#sidebar {
  max-width: 300px;
}

.nav-item {
  max-width: 200px;
  margin-top: 10px;
  height: 35px;
  padding: 10px 15px;
  text-decoration: none;
  color : #282828;
}

.nav-item > span {
  font-size: 15px;
  margin: 0 20px;
  visibility: visible;
}
@media (max-width:640px) {


}

.nav-item:hover {
  cursor: pointer;
  font-weight: bold;
}
/* LeftSection End */
</style>