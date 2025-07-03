<script>
import {Transaction} from "@/router/Transaction.js";

export default {
  data: function() {
    // 빈 문자열 데이터 init
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async chk_login() {
      const login = await Transaction.sendTransaction('POST', '/api/login', {
        'mbrEmail': this.email,
        'mbrPw': this.password
      });

      console.log("result :: " + login.accessToken)

      if(login.resultCode === 200){
        if (login.accessToken !== "" || login.accessToken !== null) {
          document.location.href = "/main";
        } else {
          alert(login.failMsg);
        }
      } else {
        alert(login.failMsg);
      }
    }
  }
};
</script>

<template>
  <div id="login" class="row">
    <div class="col-1">
    </div>
    <div class="col-10">
      <div class="row div-center">
        <div class="col-md-6 col-lg-6 loginLayer">
          <div class="login_image"></div>
        </div>
        <div class="col-md-6 col-lg-6 loginLayer">
          <div id="main-content">
            <div id="login-form">
              <div id="iconLogo" class="row">
                <div class="icon_logo"></div>
              </div>
              <div class="row">
                <div class="col-12 d-grid gap-2">
                  <input id="email" v-model="email" class="form-control" type="text" placeholder="이메일을 입력해주세요." aria-label="default input example">
                  <input id="password" v-model="password" class="form-control" type="password" placeholder="비밀번호를 입력해주세요." aria-label="default input example">
                  <button id="'signin'" class="btn text-white btn-lg" style="background-color: #53bdeb; padding: 1px; font-size : 17px;font-weight: 700; height: 50px;" @click="chk_login()">로그인</button>
                </div>
              </div>
              <div class="row center-line">
                <div class="col-4"><hr/></div>
                <div class="col-4">또는</div>
                <div class="col-4"><hr/></div>
              </div>
              <div id = "socialLogin">
                <div id= "icon_kakao" class="social-icon"></div>
                <div id = "icon_naver" class="social-icon"></div>
                <div id = "icon_google" class="social-icon"></div>
                <div id = "icon_facebook" class="social-icon"></div>
              </div>
              <br/>
              <div class="btn-groups">
                <a href="/signup">일반 회원가입</a>
                &nbsp;&nbsp;&nbsp; / &nbsp;&nbsp;&nbsp;
                <a href="/findpass">비밀번호 찾기</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1">
    </div>
  </div>
</template>

<style>
  #login{
    height: 700px;
    margin-top: 150px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  .div-center{
    display: flex;
    justify-content: center;
  }
  #main-content {
    padding: 0 60px;
    height: 450px;
  }
  .icon_logo{
    background: url('../assets/logo_1.png') no-repeat center;
    width: 500px;
    height: 96px;
  }

  .loginLayer{
    padding: 0;
    display: flex;
    max-width: 600px;
    justify-content: center;
    align-items: center;
  }

  .login_image {
    background: url('../assets/study.png') no-repeat center;
    background-size: contain;
    width: 100%;
    min-height: 450px;
  }
  #main-content > div{
    display: flex;
    height: 480px;
    width: 400px;
    flex-direction: column;
  }

  .center-line {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  #socialLogin {
    display: flex;
    justify-content: center;
  }

  .social-icon {
    align-items: center;
    border-radius: 10%;
    width: 55px;
    height: 55px;
    margin-left: 12px;
    margin-right: 12px;
  }

  .social-icon:hover {
    cursor: pointer;
    border: 1px solid transparent;
  }

  #icon_kakao {
    background: url('../assets/kakaoLogo.png') no-repeat;
    background-size: contain;
  }

  #icon_naver {
    background: url('../assets/naverLogo.png') no-repeat;
    background-size: contain;
  }

  #icon_google {
    background: url('../assets/googleLogo.png') no-repeat;
    background-size: contain;
  }
  #icon_facebook {
    background: url('../assets/facebook-icon.png') no-repeat;
    background-size: contain;
  }
  .btn-groups{
    text-align: center;
    font-size: 13px;
    margin-top: 10px;
    margin-right: 10px;
    color: #999;
  }
  .btn-groups > a {
    font-size: 1.0rem;
    text-decoration: none;
    color: #888;
  }
  .btn-groups > a:hover {
    font-weight: bold;
    text-decoration: underline;
  }
</style>
