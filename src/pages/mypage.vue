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
        <div id="mypage" class="overflow-y-scroll main-cont">
          <div class="content-view">
            <div id="bg-images" class="col-12">
              <div id="profile-image">
              </div>
            </div>
            <div id="nav-aria" class="row">
              <div class="col-8">
                <div class="base-info">
                  <span style="font-weight: bold">test@test.com</span><br/>
                  <span style="color:#888;">가입일 : 2025.07.02</span>
                </div>
              </div>
              <div class="col-4">
                <div class="buttons gap-2">
                  <button type="button" class="btn btn-outline-warning btn-sm" style="min-width: 110px; font-size: 0.9rem">비밀번호 변경</button>
                  <button type="button" class="btn btn-outline-info btn-sm" style="min-width: 96px; font-size: 0.9rem">프로필 수정</button>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-write-tab" data-bs-toggle="tab" data-bs-target="#nav-write" type="button" role="tab" aria-controls="nav-write" aria-selected="true">게시글</button>
                    <button class="nav-link" id="nav-comment-tab" data-bs-toggle="tab" data-bs-target="#nav-comment" type="button" role="tab" aria-controls="nav-comment" aria-selected="false">댓글</button>
                    <button class="nav-link" id="nav-like-tab" data-bs-toggle="tab" data-bs-target="#nav-like" type="button" role="tab" aria-controls="nav-like" aria-selected="false">좋아요</button>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-write" role="tabpanel" aria-labelledby="nav-write-tab" tabindex="0">
                    게시글 내용
                  </div>
                  <div class="tab-pane fade" id="nav-comment" role="tabpanel" aria-labelledby="nav-comment-tab" tabindex="0">
                    댓글 내용
                  </div>
                  <div class="tab-pane fade" id="nav-like" role="tabpanel" aria-labelledby="nav-like-tab" tabindex="0">
                    좋아요 내용
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer></Footer>
</template>

<style>
#mypage {
  padding: 0;
}
#bg-images{
  background: url('../assets/base_bg.png') no-repeat center;
  background-size: cover;
  height: 150px;
  border-bottom: 3px solid #eee;
}
#profile-image {
  position: relative;
  background: url('../assets/default_profile.png') no-repeat center;
  background-size: cover;
  top: 70px;
  left: 20px;
  border: 3px solid #eee;
  border-radius: 50%;
  width: 110px;
  height: 110px;
  z-index: 999;
}
@media (max-width: 768px) {
  #profile-image {
    top: 90px;
    left: 10px;
    width: 90px;
    height: 90px;
  }
}
.base-info {
  font-size: 0.9rem;
  padding: 40px 10px 10px 10px;
}
.buttons {
  display: flex;
  justify-content: right;
  padding: 10px 0;
}

.buttons > button {
  border-radius: 20px;
  font-weight: bold;
}

.nav-tabs > button {
  font-size: 0.9rem;
  width: 33.33%;
  color: #666;
}
.nav-tabs > .active {
  font-weight: bold;
}
</style>
