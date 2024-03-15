<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LeftSection from "@/components/LeftSection.vue";
import Router from "../router/index.js";
import {ref, onBeforeMount} from "vue";

export default {
  components: {Footer, Header, LeftSection},
  setup(){
    const routes = ref([])

    onBeforeMount(()=>{
      routes.value = Router.options.routes;
    })

    return(routes);
  },
  methods:{
    openLink(url){

    }
  }

};
</script>

<template>
  <div id="main">
    <Header></Header>
    <div class="row">
      <div class="col-2">
        <LeftSection></LeftSection>
      </div>
      <div class="col-10">
        Main
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>

</style>
