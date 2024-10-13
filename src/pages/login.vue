<script>
export default {};
</script>

<template>
  <div id="login">
    <div class="row">
      <div class="col-xs-0 col-lg-6 ">
          <div id="login-image">
            <div id="loginImage" class="row">
              <div class="login_image" />
            </div>
          </div>
      </div>
      <div class="col-xs-12 col-lg-6 ">
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
            <div id= "icon_kakao"></div>
            <div id = "icon_naver"></div>
            <div id = "icon_google"></div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style>
  #login{
    padding: 0 20%;
    height: 700px;
    margin-top: 100px;
    text-align: center;
  }

  #main-content {
    padding: 0 90px;
    height: 700px;
    margin-top: 100px;
    min-width: 480px;
   }
  #socialLogin{
    height: 700px;
  }
  .icon_logo{
    background: url('../assets/logo_1.png') no-repeat;
    width: 500px;
    height: 96px;
  }
  .login_image {
    background: url('../assets/study.png') no-repeat;
    width: 500px;
    height: 500px;
    margin-top: 100px;
    margin-left: 150px;
  }

  #icon_kakao {
    background: url('../assets/kakaoLogo.png') no-repeat ;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 30px;
    margin-right: 20px;
  }
  #icon_naver {
    background: url('../assets/naverLogo.png') no-repeat;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 30px;
    margin-right: 20px;
  }
  #icon_google {
    background: url('../assets/googleLogo.png') no-repeat;
    background-size: cover;
    width: 55px;
    height: 55px;
    display: flex;
    margin-left: 30px;
    margin-right: 20px;
  }

</style>
