<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import LeftSection from "@/components/LeftSection.vue";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import Router from "../router/index.js";
import {ref, onBeforeMount} from "vue";

export default {
  components: {FontAwesomeIcon, Footer, Header, LeftSection},
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
    <div id="main-section" class="row">
      <div class="col-2">
        <LeftSection></LeftSection>
      </div>
      <div id="main-section" class="col-10 overflow-auto">
        <!-- main 게시물 시작 -->
        <div class="card col-11 shadow p-3 mb-5 bg-body rounded" style="max-width: 1200px; min-height: 450px;">
          <div class="row g-0 border" style="border-radius: 15px;" >
            <div class="col-md-6">
              <div class="row">
                <div class="col-11">
                  <img src="../assets/추억.jpg" class="img-fluid rounded-start border col-12" style="height: 380px; margin-top: 15px; margin-left: 15px;">
                </div>
                <div class="col-1" style="padding: 0">
                  <font-awesome-icon icon="fa-chevron-right" style="margin-top: 180px; margin-left: 15px" class="icons"/>
                </div>
              </div>
            </div>
            <div class="col-md-6 flex-md-row">

              <div class="card-body overflow-auto" style="border-radius: 15px; padding:15px 15px;">
                <pre class="card-text" style="height: 380px; margin-left: 15px;">
군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!
                군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!
                군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!
                군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!</pre>
              </div>
            </div>
          </div>
          <div class="row g-0" style="margin-top: 10px; margin-bottom: 10px;">
            <span class="col-9" style="font-size: 20px; padding-left: 20px"><b>또 하나의 추억</b></span>
            <span class="card-text col-3" style="text-align: right; align-self: flex-end">
              <font-awesome-icon icon="far fa-user" class="icons"/>
              <b style="font-size: 15px; margin-left: 10px;"> 최윤정 </b>
              <small class="text-body-secondary" style="margin-left: 15px; margin-right: 15px;">2024.03.15 17:09</small>
            </span>
          </div>
          <div class="row g-0">
            <span class="card-text" style="text-align: left;">
              <font-awesome-icon icon="fa-comment" class="fa-1x icons" style="margin-left: 15px"/>
              <span style="margin-left: 15px">99</span>
              <font-awesome-icon icon="fa-heart" class="fa-1x icons" style="color:firebrick; margin-left: 15px"/>
              <span style="margin-left: 15px">99</span>
            </span>
          </div>
        </div>
        <!-- main 게시물 끝 -->

        <!-- Dummy Data -->
        <div class="card col-11 shadow p-3 mb-5 bg-body rounded" style="max-width: 1200px; min-height: 450px;">
          <div class="row g-0 border" style="border-radius: 15px;" >
            <div class="col-md-6">
              <div class="row">
                <div class="col-11">
                  <img src="..." class="img-fluid rounded-start border col-12" style="height: 380px; margin-top: 15px; margin-left: 15px;">
                </div>
                <div class="col-1" style="padding: 0">
                  <font-awesome-icon icon="fa-chevron-right" style="margin-top: 180px; margin-left: 15px" class="icons"/>
                </div>
              </div>
            </div>
            <div class="col-md-6 flex-md-row">

              <div class="card-body overflow-auto" style="border-radius: 15px; padding:15px 15px;">
                <pre class="card-text" style="height: 380px; margin-left: 15px;">테스트 내용 입니다.</pre>
              </div>
            </div>
          </div>
          <div class="row g-0" style="margin-top: 10px; margin-bottom: 10px;">
            <span class="col-9" style="font-size: 20px; padding-left: 20px"><b>테스트 제목</b></span>
            <span class="card-text col-3" style="text-align: right; align-self: flex-end">
              <font-awesome-icon icon="far fa-user" class="icons"/>
              <b style="font-size: 15px; margin-left: 10px;"> 테스트 </b>
              <small class="text-body-secondary" style="margin-left: 15px; margin-right: 15px;">2024.03.15 12:31</small>
            </span>
          </div>
          <div class="row g-0">
            <span class="card-text" style="text-align: left;">
              <font-awesome-icon icon="fa-comment" class="fa-1x icons" style="margin-left: 15px"/>
              <span style="margin-left: 15px">99</span>
              <font-awesome-icon icon="fa-heart" class="fa-1x icons" style="color:firebrick; margin-left: 15px"/>
              <span style="margin-left: 15px">99</span>
            </span>
          </div>
        </div>
        <div class="card col-11 shadow p-3 mb-5 bg-body rounded" style="max-width: 1200px; min-height: 450px;">
          <div class="row g-0 border" style="border-radius: 15px;" >
            <div class="col-md-6">
              <div class="row">
                <div class="col-11">
                  <img src="../assets/추억.jpg" class="img-fluid rounded-start border col-12" style="height: 380px; margin-top: 15px; margin-left: 15px;">
                </div>
                <div class="col-1" style="padding: 0">
                  <font-awesome-icon icon="fa-chevron-right" style="margin-top: 180px; margin-left: 15px" class="icons"/>
                </div>
              </div>
            </div>
            <div class="col-md-6 flex-md-row">

              <div class="card-body overflow-auto" style="border-radius: 15px; padding:15px 15px;">
                <pre class="card-text" style="height: 380px; margin-left: 15px;">
군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!
                군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!
                군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!
                군자에서 먹은 돈까스 맛집bb
너무 맛있었고 강아지도 너무 귀여웠다.
이름은 챔피언포차!
술이 술술 들어가서 취해버렸다.
다음에는 절대 못갈듯~!!!
이승호 취해서 너무 진상이었다,!</pre>
              </div>
            </div>
          </div>
          <div class="row g-0" style="margin-top: 10px; margin-bottom: 10px;">
            <span class="col-9" style="font-size: 20px; padding-left: 20px"><b>또 하나의 추억</b></span>
            <span class="card-text col-3" style="text-align: right; align-self: flex-end">
              <font-awesome-icon icon="far fa-user" class="icons"/>
              <b style="font-size: 15px; margin-left: 10px;"> 최윤정 </b>
              <small class="text-body-secondary" style="margin-left: 15px; margin-right: 15px;">2024.03.15 17:09</small>
            </span>
          </div>
          <div class="row g-0">
            <span class="card-text" style="text-align: left;">
              <font-awesome-icon icon="fa-comment" class="fa-1x icons" style="margin-left: 15px"/>
              <span style="margin-left: 15px">99</span>
              <font-awesome-icon icon="fa-heart" class="fa-1x icons" style="color:firebrick; margin-left: 15px"/>
              <span style="margin-left: 15px">99</span>
            </span>
          </div>
        </div>
        <!-- Dummy Data -->
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>
.card {
  margin-top: 15px;
  margin-left: 15px;
  min-width: 480px;
}

.icons:hover {
  cursor: pointer;
}

#main-section {
  max-height: 800px;
  border-left: #dee2e6 solid 1px;
}
</style>
