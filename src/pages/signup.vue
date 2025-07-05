<script setup xmlns="http://www.w3.org/1999/html">
import Footer from "@/components/Footer.vue";
import LoginHeader from "@/components/LoginHeader.vue";

// export default {
//   components: {Footer, Header}
// };

</script>

<template>
  <LoginHeader/>
  <div id="signup" class="row">
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
              <form>
                <div class="col-12 d-grid gap-1 signup-form">
                  <div class="form-row">
                    <div class="col-12 mb-3">
                      <label for="chk_email" class="col-form-label">E-mail</label>
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text" id="input-email">@</span>
                        </div>
                        <!-- 일치 : is-valid, 불일치: is-invalid -->
                        <input type="text" class="form-control" id="chk_email" placeholder="이메일을 입력해주세요." required>
                        <div class="input-group-append">
                          <button class="btn btn-outline-secondary" type="button">이메일인증</button>
                        </div>
                        <div class="valid-feedback">
                          이메일 인증이 완료되었습니다.
                        </div>
                        <div class="invalid-feedback">
                          이미 가입된 이메일 입니다.
                        </div>
                        <div class="invalid-feedback">
                          이메일 형식이 올바르지 않습니다.
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="username" class="col-form-label">사용자 이름</label>
                      <input type="text" class="form-control" id="username" placeholder="사용자 이름을 입력해주세요." required>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="password" class="col-form-label">패스워드</label>
                      <input type="password" class="form-control" id="password" placeholder="패스워드를 입력해주세요.(영문/숫자/특수문자 포함 8자이상.)" style="font-size: 0.8rem" required>
                    </div>
                    <div class="col-md-12 mb-3">
                      <label for="chk_password" class="col-form-label">패스워드 확인</label>
                      <!-- 일치 : is-valid, 불일치: is-invalid -->
                      <input type="password" class="form-control" id="chk_password" placeholder="패스워드를 다시 입력해주세요." required>
                      <div class="valid-feedback">
                        패스워드가 일치 합니다.
                      </div>
                      <div class="invalid-feedback">
                        패스워드가 일치하지 않습니다.
                      </div>
                      <div class="invalid-feedback">
                        패스워드는 문자/숫자/특수문자 조합이어야 합니다.
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
                      <!-- 일치 : is-valid, 불일치: is-invalid -->
                      <label class="form-check-label" for="invalidCheck"> 이용약관에 동의합니다.</label>
                       &nbsp;<a href="/error">이용약관</a>
                      <!--                    / <a href="/login">개인정보처리방침</a>-->
                      <div class="invalid-feedback">
                        이용약관에 동의해야 회원가입 가능합니다.
                      </div>
                    </div>
                  </div>
                  <button id="btn-signup" class="btn text-white btn-lg" style="background-color: #53bdeb; padding: 1px; font-size : 17px;font-weight: 700; height: 50px;" @click="chk_signup()">가입하기</button>
                </div>
              </form>
            </div>
            <div class="row center-line">
              <div class="col-4"><hr/></div>
              <div class="col-4">또는</div>
              <div class="col-4"><hr/></div>
            </div>
            <div class="btn-groups" style="font-size: 1.0rem;">
              <span style="font-weight: bold;">계정이 있으신가요?</span> &nbsp;
              <a href="/login">로그인</a>
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

#signup{
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
.signup-form {
  text-align: justify;
}

#btn-signup {
  margin-top: 15px;
}

.icon_logo{
  background: url('../assets/logo_1.png') no-repeat center;
  width: 500px;
  height: 96px;
}
.icon_lock {
  background: url('../assets/icons.png') no-repeat;
  width: 96px;
  height: 96px;
}

</style>