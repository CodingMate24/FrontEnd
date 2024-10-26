<script>
export default {};
</script>

<template>
  <div class="row">
    <div class="col-xs-0 col-lg-3 ">
    </div>
      <div id="login" class="col-xs-12 col-lg-6 ">
        <div class="row">
          <div class="col-xs-0 col-lg-6 loginLayer">
            <div id="loginImage" >
              <div class="col-xs-12 col-lg-12 login_image" />
            </div>
          </div>
          <div class="col-xs-12 col-lg-6 loginLayer">
            <div id="main-content" class="col-xs-12 col-lg-8">
            <div id="login-form">
              <div id="iconLogo" class="row">
                <div class="icon_logo" />
              </div>
              <div class="row d-grid gap-2">
                <input id="email" class="form-control" type="text" placeholder="이메일을 입력해주세요." aria-label="default input example">
                <input id="password" class="form-control" type="text" placeholder="비밀번호를 입력해주세요." aria-label="default input example">
                <button id="'signin'" class="btn text-white btn-lg" style="background-color: #53bdeb; padding: 1px; font-size : 17px;font-weight: 700; ">로그인</button>
              </div>
              <br/>
              <div class="row text-center">
                <div class="col-4"><hr/></div>
                <div class="col-4">또는</div>
                <div class="col-4"><hr/></div>
              </div>
              <br/>
              <div id = "socialLogin" class="row">
                <div id= "icon_kakao" class="social-icon"></div>
                <div id = "icon_naver" class="social-icon"></div>
                <div id = "icon_google" class="social-icon"></div>
                <div id = "icon_facebook" class="social-icon"></div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xs-0 col-lg-3 ">
    </div>
  </div>
</template>

<style>
  #login{
    height: 700px;
    margin-top: 50px;
    text-align: center;
  }
  #main-content {
    padding: 0 90px;
    height: 450px;
    margin-top: 50px;
    min-width: 480px;
   }
  #socialLogin{
    height: 700px;
  }
  .icon_logo{
    background: url('../assets/logo_1.png') no-repeat center;
    width: 500px;
    height: 96px;
  }
  .loginLayer{
    padding: 50px 0px;
  }
  .login_image {
    background: url('/src/assets/study.png') no-repeat center;
    background-size: contain;
    min-width: 300px;
    max-width: 450px;
    height: 450px;
    margin-top: 50px;
    margin-left: 50px;
  }

  #icon_kakao {
    background: url('../assets/kakaoLogo.png') no-repeat ;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 12px;
    margin-right: 12px;
  }
  .social-icon:hover {
    cursor: pointer;
    background-color: #282828;
  }
  #icon_naver {
    background: url('../assets/naverLogo.png') no-repeat;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 12px;
    margin-right: 12px;
  }

  #icon_google {
    background: url('../assets/googleLogo.png') no-repeat;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 12px;
    margin-right: 12px;
  }
  #icon_facebook {
    background: url('../assets/facebook-icon.png') no-repeat;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 12px;
    margin-right: 12px;
  }

</style>
