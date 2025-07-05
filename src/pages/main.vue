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
  <Header></Header>
  <div class="bodysection">
    <div class="row">
      <div id="left-001" class="col-2">
        <LeftSection></LeftSection>
      </div>
      <div class="col-10 r-main">
        <div id="main" class="overflow-y-scroll main-cont">
          <img src="@/assets/banner_main.png" style="height: 35px; margin-bottom: 10px; margin-top: 10px;" />
          <div class="col-12">
            <!-- main 게시물 시작 -->
            <!-- card Start -->
            <div class="card card-main shadow bg-body rounded">
              <div class="row border rounded" style="padding: 5px;" >
                <div class="col-lg-6 col-xs-12">
                  <div class="row">
                    <div class="col-11">
                      <img src="@/assets/추억.jpg" class="rounded shadow p-1 board-img">
                    </div>
                    <div class="col-1 part" style="padding: 0">
                      <font-awesome-icon icon="fa-chevron-right" style="margin-top: 150px; margin-left: 15px" class="icons"/>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 col-xs-12">
                  <div class="card-body overflow-auto" style="border-radius: 15px; padding:15px 0;">
                                        <pre class="card-text">
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
이승호 취해서 너무 진상이었다,!
                                        </pre>
                  </div>
                </div>
              </div>

              <div class="row post-info">
                <div class="row" style="margin-top: 10px; margin-bottom: 10px;">
                  <span id="post_id" class="visually-hidden">1</span>
                  <div id="post_title" class="col-lg-9 col-sm-12" style="font-size: 20px; font-weight: bold;"><b class="part-title">또 하나의 추억</b></div>
                  <div class="col-lg-3 col-sm-12" style="width: 210px; padding: 0; position: relative; right: 0px;">
                    <div class="part-date" style="text-align: right; width: 120px; position: relative; right: 0px; float: right;">
                      <small id="post_time" class="text-body-secondary">2024.03.15 17:09</small>
                    </div>
                    <div class="part" style="width: 80px; position: relative; padding: 0; right: 0px; float: right;">
                      <!--
                      <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                      -->
                      <img src="@/assets/default_profile.png" class="icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
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
            </div>
            <!-- card end -->
            <!-- main 게시물 끝 -->
          </div>
          <!--
          <div class="col-2">
              <div id="rightsection">
              </div>
          </div>
          -->
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style>
/* Main Start */
.card {
  margin-top: 0;
  margin-left: 0;
}

.card-body {
  padding-left: 0;
}

.card-text {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 18;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (max-width:992px) {
  .board-img {
    max-height: 400px;
  }
  .card-text {
    -webkit-line-clamp: 9;
  }
}

.popular-row {
  margin-bottom: 20px;
}

.board-img {
  width: 100%;
  max-height: 350px;
}

.card-main {
  margin-bottom: 15px;
  padding: 20px;
  max-width: 950px;
  min-height: 370px;
  margin-top: 15px;
}

.card-main:hover {
  border: #181818 solid 1px;

}

.part-count {
  margin-left: 5px;
}

.part {
  padding: 0 10px;
}


.part:hover {
  cursor: pointer;

  .part-count {
    font-weight: bold;
  }

  .icons {
    font-size: 17px;
  }
}

#post_title:hover, #post_creator:hover {
  cursor: pointer;
  text-decoration: underline;
  font-weight: bold;
}

#rightsection {
  margin-top: -20px;
  padding:  0 0 0 20px;
  min-height: calc(100vh - 172px);
}
/* Main End */
</style>
