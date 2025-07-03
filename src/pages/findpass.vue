<script>
import axios from 'axios';
import LoginHeader from "@/components/LoginHeader.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: {Footer, LoginHeader}
};


// 테스트 코드 - 추후 반영예쩡
let formData = {"test" : "test"};

const LoginService = new function () {
  axios.get('/api/user/login', formData, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => {
    console.log("res.data :", res.data);
  });
};
</script>

<template>
  <LoginHeader/>
  <div id="findpass" class="row">
    <div class="col-1">
    </div>
    <div class="col-10">
      <div class="row div-center">
        <div class="col-md-12 col-lg-12 signupLayer">
          <div id="main-content">
            <div class="row">
              <div id="iconLogo" class="row">
                <div class="icon_logo"></div>
              </div>
              <div id="lockLogo" class="row">
                <div class="icon_lock"></div>
              </div>
              <br/>
              <div class="row text-center">
                <h4>로그인에 문제가 있나요?</h4>
                <p>가입할 때 입력한 이메일을 입력해 주세요.</p>
              </div>
              <form>
                <div class="col-12 d-grid gap-1 findpass-form">
                  <div class="form-row">
                    <div class="col-12 mb-3">
                      <label for="chk_email" class="col-form-label">E-mail</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="input-email">@</span>
                        </div>
                        <!-- 일치 : is-valid, 불일치: is-invalid -->
                        <input type="text" class="form-control" id="chk_email" placeholder="이메일을 입력해주세요." required>
                        <div class="invalid-feedback">
                          가입되지 않은 이메일 입니다.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button id="'sendMail'" class="btn text-white btn-lg" style="background-color: #53bdeb; padding: 1px; font-size : 17px;font-weight: 700; height: 50px;">임시비밀번호 발송</button>
                </div>
              </form>
            </div>
            <div class="row center-line">
              <div class="col-4"><hr/></div>
              <div class="col-4">또는</div>
              <div class="col-4"><hr/></div>
            </div>
            <div id="btn-groups" class="row d-grid gap-4">
              <button id="signin" class="btn btn-outline-dark btn-md">새 계정 만들기</button>
              <button id="login" class="btn btn-outline-secondary btn-md">로그인으로 돌아가기</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-1">
    </div>
  </div>
  <Footer/>
</template>

<style>
  #findpass{
    height: 700px;
    margin-top: 150px;
    text-align: center;
    display: flex;
    justify-content: center;
  }
  #lockLogo{
    display: flex;
    justify-content: center;
    padding-bottom: 20px;
  }
  .icon_lock {
    background: url('../assets/icons.png') no-repeat -130px -0px;
    width: 96px;
    height: 96px;
  }
  .div-center{
    display: flex;
    justify-content: center;
  }
  #main-content {
    padding: 0 60px;
  }
  .signupLayer{
    padding: 0;
    max-width: 600px;
    min-width: 500px;
    justify-content: center;
    align-items: center;
  }
  .center-line {
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .findpass-form {
    text-align: justify;
  }

  .icon_logo{
    background: url('../assets/logo_1.png') no-repeat center;
    width: 500px;
    height: 96px;
  }

  #btn-groups{
    margin-top: 30px;
  }
</style>
