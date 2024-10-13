<script setup xmlns="http://www.w3.org/1999/html">
import Footer from "@/components/Footer.vue";
import Header from "@/components/Header.vue";

// export default {
//   components: {Footer, Header}
// };

</script>

<template>
  <Header/>
  <div class="row" id="register">
    <div id="main-content" class="col-xs-8 col-lg-3 ">
      <div id="iconLogo" class="row">
        <div class="icon_logo" />
      </div>
      <div class="row d-grid gap-2">
        <input id="email" class="form-control" type="text" placeholder="이메일 주소" aria-label="default input example">
        <input id="name" class="form-control" type="text" placeholder="사용자 이름" aria-label="default input example">
        <input id="password" class="form-control" type="text" placeholder="비밀번호" aria-label="default input example">
        <input id="password_check" class="form-control" type="text" placeholder="비밀번호 확인" aria-label="default input example">
        <button id="signin" class="btn text-white btn-lg" style="background-color: #53bdeb; padding: 1px; font-size : 17px;font-weight: 700;">회원가입</button>
      </div>
      <br/>
      <div class="row text-center">
        <div class="col-4"><hr/></div>
        <div class="col-4">또는</div>
        <div class="col-4"><hr/></div>
      </div>
      <br/>
      <div id="orBtn" class="row d-grid gap-2">
        <button id="signin" class="text-black">계정이 있으신가요? 로그인 하기</button>
      </div>

    </div>

  </div>
  <Footer/>
</template>

<style>

#iconLogo {
  margin-top: 60px;
}
#main-content {
  padding: 0 90px;
  height: 700px;
  margin-top: 50px;
  min-width: 480px;
}

.icon_logo {
  background: url('../assets/logo_1.png') no-repeat;
  width: 500px;
  height: 96px;
}

</style>