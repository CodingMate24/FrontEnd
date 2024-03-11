<script>
export default {};
</script>

<template>
  <div class="row" id="findPass">
    <div class="col-xs-2 col-lg-4"/>
    <div class="col-xs-8 col-lg-3">
      <br/>
      <br/>
      <div class="row">
        <div class="icon_lock" />
      </div>
      <br/>
      <div class="row text-center">
        <h4>로그인에 문제가 있나요?</h4>
        <p>가입할 때 입력한 이메일을 입력해 주세요.</p>
      </div>
      <div class="row d-grid gap-2">
        <input id="email" class="form-control form-control-lg" type="text" placeholder="이메일을 입력해주세요." aria-label="default input example">
        <button id="sendMail" class="btn text-white btn-lg" style="background-color: #78B2F8;">임시비밀번호 발송</button>
      </div>
      <br/>
      <div class="row text-center">
        <div class="col-5"><hr/></div>
        <div class="col-2">또는</div>
        <div class="col-5"><hr/></div>
      </div>
      <br/>
      <div class="row d-grid gap-2">
          <button id="signin" class="btn btn-outline-dark btn-lg">새 계정 만들기</button>
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
  .icon_lock {
    background: url('image/icons.png') no-repeat -130px -0px;
    width: 96px;
    height: 96px;
  }
</style>
