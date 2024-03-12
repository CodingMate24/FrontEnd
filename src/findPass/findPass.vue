<script>
import axios from 'axios';

export default {};


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
  <div class="row border-1" id="findPass">
    <div class="col-xs-2 col-lg-4"/>
    <div class="col-xs-8 col-lg-2">
      <div id="lockLogo" class="row">
        <div class="icon_lock" />
      </div>
      <br/>
      <div class="row text-center">
        <h4>로그인에 문제가 있나요?</h4>
        <p>가입할 때 입력한 이메일을 입력해 주세요.</p>
      </div>
      <div class="row d-grid gap-2">
        <input id="email" class="form-control" type="text" placeholder="이메일을 입력해주세요." aria-label="default input example">
        <div id="passwordHelpBlock" class="form-text" style="color: red;">
          해당 계정을 찾을 수 없습니다.
        </div>
        <button id="sendMail" class="btn text-white btn-lg" style="background-color: #78B2F8;">임시비밀번호 발송</button>
      </div>
      <br/>
      <div class="row text-center">
        <div class="col-4"><hr/></div>
        <div class="col-4">또는</div>
        <div class="col-4"><hr/></div>
      </div>
      <br/>
      <div class="row d-grid gap-2">
          <button id="signin" class="btn btn-outline-dark btn-lg">새 계정 만들기</button>
          <br/>
          <button id="login" class="btn btn-outline-secondary btn-lg">로그인으로 돌아가기</button>
      </div>
    </div>
    <div class="col-xs-2 col-lg-4"/>
  </div>
</template>

<style>
  div {
    margin: 0 auto;
  }
  #lockLogo {
    margin-top: 60px;
  }
  .icon_lock {
    background: url('image/icons.png') no-repeat -130px -0px;
    width: 96px;
    height: 96px;
  }
</style>
