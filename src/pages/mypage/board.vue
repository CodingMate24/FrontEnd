<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref, onBeforeMount} from "vue";
import Router from "@/router/index.js";

export default {
  computed: {
  },
  components: {FontAwesomeIcon},
  setup(){
    const routes = ref([]);

    onBeforeMount(()=>{
          routes.value = Router.options.routes;
        }

    )
    return{routes};
  },
  methods:{

  }
}
</script>

<template>
  <table style="width: 100%;">
    <tr class="border-bottom">
      <td class="my-board">
        <table style="width: 100%; background-color: transparent;">
          <tr style="background-color: transparent;">
            <td style="width:90px; padding-top:10px; padding-left: 10px;">
              <div class="thumb-profile">
              </div>
              <span class="board-writer">테스트</span>
            </td>
            <td colspan="2" style="padding-left:20px; padding-top:20px; vertical-align: top;">
              <span class="board-title" style="font-weight: bold; font-size: 1.0rem">제목</span> <br/>
              <span class="board-text" style="font-size: 0.8rem;">
              <pre>
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.내용입니다.
              </pre>
              </span>
            </td>
            <td style="width:40px; text-align: right; vertical-align: top;">
              <button class="btn btn-link btn-option">
                <font-awesome-icon icon="fa-solid fa-ellipsis" style="color: #888;"/>
              </button>
            </td>
          </tr>
          <tr style="background-color: transparent;">
            <td colspan="3" style="padding-left: 20px;">
              <a class="btn_board01" href="#">
                <font-awesome-icon icon="far fa-heart" class="fa-1x icons align-middle" style="color:firebrick;"/>
                <!--
                <font-awesome-icon :icon="['far', 'thumbs-up']" />
                -->
                <span class="btngrp-board" style="font-size: 0.7rem; color: #666; font-weight: bold; margin-left: 5px;">좋아요</span>&nbsp;
                <span class="cnt-like" style="font-size: 0.7rem; color: #666; font-weight: bold;">10</span>
              </a>
              &nbsp;&nbsp;&nbsp;
              <a class="btn_board01" href="#">
                <font-awesome-icon icon="far fa-comment" class="fa-1x icons align-middle"/>
                <span class="btngrp-board" style="font-size: 0.7rem; color: #666; font-weight: bold; margin-left: 5px;">댓글</span>&nbsp;
                <span class="cnt-like" style="font-size: 0.7rem; color: #666; font-weight: bold;">5</span>
              </a>
            </td>
            <td colspan="1" style="text-align: right; padding-right:10px;">
              <span class="board-date">2025.07.06</span>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</template>

<style>
/* 게시글 내용 Start */
.my-board {
  margin:0 10px;
  height: 5%;
  margin-bottom: 10px;
}
.my-board:hover {
  cursor: pointer;
  background-color: #eee;
}

.thumb-profile {
  background: url('@/assets/default_profile.png') no-repeat center;
  background-size: cover;
  border: 3px solid #ccc;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  z-index: 999;
}
.board-writer {
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  margin-left:15px;
}
.board-date {
  font-size: 0.9rem;
  text-align: right;
  color: #999;
}
.btn-option {
  margin-right: 10px;
  padding: 5px;
  text-decoration: none;
  width: 30px;
  height: 30px;
}

.btn-option:hover {

  cursor: pointer;
  border-color: #999;
  background-color: #fff;
  width: 30px;
  height: 30px;
}
.btn_board01 {
  text-decoration: none;

}
.btn_board01:hover {
  cursor: pointer;
  text-decoration: underline #2b2f32;
}
/* 게시글 내용 End */
</style>