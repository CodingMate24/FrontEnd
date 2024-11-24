<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LeftSection from "@/components/LeftSection.vue";
import Find_begin from "@/pages/find/component/find_begin.vue";
import Find_result from "@/pages/find/component/find_result.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Router from "@/router/index.js";
import AxiosInst from '@/main.js';
import {ref, onBeforeMount} from "vue";

export default {
  components: {FontAwesomeIcon, Footer, Header, LeftSection, Find_result, Find_begin },

  setup(){
    const routes = ref([])

    onBeforeMount(()=>{
      routes.value = Router.options.routes;
    })

    return(routes);
  },
  methods:{
    heartClick(){
      return AxiosInst(
          { method: "GET",
               url: "/api/test/connect?input=테스트",
              data: {},
            header: {
              "Context-Type": "application/json",
            },
          }
      )
      .then( (res)=>{
        //성공했을 경우
        console.log("성공",res);
        alert(res.data);
      })
      .catch( (res) => {
        //실패했을 경우
        console.error("실패",res);});
      }
    }

};
</script>

<template>
  <div id="find">
    <Header></Header>
    <div id="main-section" class="row">
      <div class="col-2">
        <LeftSection></LeftSection>
      </div>
      <div id="main-section" class="col-10 overflow-auto">
        <div id="find_main">
        <!-- START -->
          <div class="row">
            <div class="col-10" style="min-width: 411px;">
              <div class="input-group mb-3">
                <label class="input-group-text"><font-awesome-icon icon="magnifying-glass" style="font-size: 17px;"/></label>
                <input type="text" class="form-control rounded-end" placeholder="검색어를 입력해주세요." aria-label="searchWord" aria-describedby="basic-addon1" style="margin-right: 5px;">
                <button v-on:click="heartClick" class="btn btn-secondary rounded" type="button" id="button-addon2" style="z-index: 99;"><font-awesome-icon class="align-middle" icon="magnifying-glass" style="margin-right: 5px;"/>검색</button>
              </div>
            </div>
          </div>
          <Find_begin ></Find_begin>
          <Find_result class="visually-hidden"></Find_result>

        <!-- END -->
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>
#main-section {
  height: 820px;
  border-left: #dee2e6 solid 1px;
  --bs-gutter-x: 0;
}

#find_main {
  margin-left: 30px;
  margin-right: 30px;
  margin-top: 20px;
}
</style>
