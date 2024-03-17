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
    heartClick(url){

    },
    commentWright(wrightYn){
      if(wrightYn){
      }

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
        <img src="@/assets/banner_main.png" style="margin-left: 30px; margin-top: 20px; margin-bottom: 10px; height: 35px;" />

        <!-- main 게시물 시작 -->
        <div class="card col-11 shadow p-3 mb-4 bg-body rounded" style="max-width: 1100px; min-height: 370px;">
          <div class="row g-0 border part" style="border-radius: 15px;" >
            <div class="col-md-6">
              <div class="row">
                <div class="col-11">
                  <img src="../assets/추억.jpg" class="img-fluid rounded-start border col-12" style="margin-top: 15px; margin-left: 15px; max-height: 300px;">
                </div>
                <div class="col-1" style="padding: 0">
                  <font-awesome-icon icon="fa-chevron-right" style="margin-top: 180px; margin-left: 15px" class="icons"/>
                </div>
              </div>
            </div>
            <div class="col-md-6 flex-md-row">
              <div class="card-body overflow-auto" style="border-radius: 15px; padding:15px 15px;">
                <pre class="card-text" style="max-height: 300px; margin-left: 15px;">
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
            <span id="post_id" class="visually-hidden">1</span>
            <span id="post_title" class="col-9" style="font-size: 20px; font-weight: bold;"><b class="part part-title">또 하나의 추억</b></span>
            <div class="col-3" style="min-width: 210px; padding: 0; position: relative; right: 0px;">
              <div class="part-date" style="text-align: right; width: 120px; position: relative; right: 0px; float: right;">
                <small id="post_time" class="text-body-secondary">2024.03.15 17:09</small>
              </div>
              <div class="part" style="width: 80px; position: relative; padding: 0; right: 0px; float: right;">
                <!--
                <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                -->
                <img src="../assets/default_profile.png" class="icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                <b id="post_creator" style="font-size: 15px; margin-left:7px;">최윤정</b>
              </div>

            </div>
          </div>
          <div class="row g-0">
            <div class="card-text" style="text-align: left; display: flex">
              <div class="part heart-part">
                <font-awesome-icon icon="far fa-heart" class="fa-1x icons align-middle" style="color:firebrick;"/>
                <span class="part-count">99</span>
              </div>
              <div class="part comment-part">
                <font-awesome-icon icon="far fa-comment" class="fa-1x icons align-middle" />
                <span class="part-count">99</span>
              </div>
            </div>
          </div>
        </div>
        <!-- main 게시물 끝 -->

        <!-- main 게시물 시작 -->
        <div class="card col-11 shadow p-3 mb-4 bg-body rounded" style="max-width: 1100px; min-height: 370px;">
          <div class="row g-0 border part" style="border-radius: 15px;" >
            <div class="col-md-6">
              <div class="row">
                <div class="col-11">
                  <img src="../assets/추억.jpg" class="img-fluid rounded-start border col-12" style="margin-top: 15px; margin-left: 15px; max-height: 300px;">
                </div>
                <div class="col-1" style="padding: 0">
                  <font-awesome-icon icon="fa-chevron-right" style="margin-top: 180px; margin-left: 15px" class="icons"/>
                </div>
              </div>
            </div>
            <div class="col-md-6 flex-md-row">
              <div class="card-body overflow-auto" style="border-radius: 15px; padding:15px 15px;">
                <pre class="card-text" style="max-height: 300px; margin-left: 15px;">
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
            <span id="post_id" class="visually-hidden">1</span>
            <span id="post_title" class="col-9" style="font-size: 20px; font-weight: bold;"><b class="part part-title">또 하나의 추억</b></span>
            <div class="col-3" style="min-width: 210px; padding: 0; position: relative; right: 0px;">
              <div class="part-date" style="text-align: right; width: 120px; position: relative; right: 0px; float: right;">
                <small id="post_time" class="text-body-secondary">2024.03.15 17:09</small>
              </div>
              <div class="part" style="width: 80px; position: relative; padding: 0; right: 0px; float: right;">
                <!--
                <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                -->
                <img src="../assets/default_profile.png" class="icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                <b id="post_creator" style="font-size: 15px; margin-left:7px;">최윤정</b>
              </div>

            </div>
          </div>
          <div class="row g-0">
            <div class="card-text" style="text-align: left; display: flex">
              <div class="part heart-part">
                <font-awesome-icon icon="far fa-heart" class="fa-1x icons align-middle" style="color:firebrick;"/>
                <span class="part-count">99</span>
              </div>
              <div class="part comment-part">
                <font-awesome-icon icon="far fa-comment" class="fa-1x icons align-middle" />
                <span class="part-count">99</span>
              </div>
            </div>
          </div>
        </div>
        <!-- main 게시물 끝 -->

      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<style>
.card {
  margin-top: 15px;
  margin-left: 30px;
  min-width: 480px;
}

.part {
  padding: 0 10px;
}

.part-count {
  font-size: 15px;
  margin-left: 8px;
}

.part:hover {
  cursor: pointer;
}

.part-count:hover {
  font-weight: bold;
}

.part-title:hover {
  text-decoration: underline;
}

.icons:hover {
  font-size: 17px;
}

#main-section {
  height: 820px;
  border-left: #dee2e6 solid 1px;
  --bs-gutter-x: 0;
}
</style>
