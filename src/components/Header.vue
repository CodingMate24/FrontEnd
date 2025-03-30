<template>
  <div id="header">
    <header class="border-bottom">
      <div class="big-logo" />
      <router-link to="/login" class="logout_btn"><font-awesome-icon class="fa-1x icon-tmp" icon="arrow-right-from-bracket"/><span> 로그아웃</span></router-link>
    </header>
  </div>
</template>

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

<style>

header {
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-content: baseline;
}

.big-logo {
  background: url('@/assets/logo_3.png') no-repeat -0px -0px;
  width: 156px;
  height: 35px;
  margin: 0px;
}

.logout_btn {
  float:right;
  font-size: 15px;
  text-decoration: none;
  color: #000;
  height: 35px;
  margin: 0px;
  padding-top: 5px;
}
#main-section {
  height: calc(100vh - 172px);
}

#content-section {
  height: calc(100vh - 172px);
  border-left: #dee2e6 solid 1px;
  --bs-gutter-x: 0;
}
</style>