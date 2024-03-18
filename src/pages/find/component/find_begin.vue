<script>
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import {ref, onBeforeMount} from "vue";

export default {
  setup(){
    const routes = ref([])

    onBeforeMount(()=>{

    })

    return(routes);
  },
  methods:{
  }
};
</script>

<template>
  <div id="find_begin">
    <div class="row">
      <span id="begin_title">인기글 TOP9</span>
    </div>
    <div id="begin-content" class="row">
      <div class="col-10">
        <div class="row popular-row">
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="@/assets/추억.jpg" class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row popular-row">
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row popular-row">
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-12">
            <div class="card card-popular shadow bg-body rounded">
              <img id="popular-img" src="..." class="card-img-top border shadow" alt="...">
              <div class="card-body">
                <h5 id="popular-title" class="card-title">게시물 제목</h5>
                <div class="row">
                  <div class="card-text" style="text-align: left; display: flex">
                    <div class="popular">
                      <font-awesome-icon icon="far fa-heart" class="fa-1x align-middle" style="color:firebrick;"/>
                      <span class="popular-count">99</span>
                    </div>
                    <div class="popular">
                      <font-awesome-icon icon="far fa-comment" class="fa-1x align-middle" />
                      <span class="popular-count">99</span>
                    </div>
                  </div>
                </div>
                <div class="popular" style="margin-top: 5px;">
                  <!--
                  <font-awesome-icon id="post_profile" icon="far fa-user" class="icons align-middle"/>
                  -->
                  <img src="@/assets/default_profile.png" class="popular-icons align-middle" style="width: 20px; height: 20px; border-radius: 12px;">
                  <span id="popular_creator" style="font-size: 15px; margin-left:7px;">최윤정</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-2">
      </div>
    </div>
  </div>
</template>

<style>

.card {
  margin-top: 0;
  margin-left: 0;
  min-width: 411px;
}

.card-body {
  padding-left: 0;
}

.popular-row {
  margin-bottom: 20px;
}

#begin_title {
  padding: 0;
  font-size: 16px;
  font-weight: bold;
  margin-left: 15px;
}

#begin-content {
  margin-top: 15px;
}

#popular-title {
  padding: 0 10px;
}

.card-popular {
  height: 500px;
  margin-bottom: 15px;
  padding: 15px;
}

.card-popular:hover {
  border: #181818 solid 1px;

}

.card-img-top {
  height: 350px;
}

.popular {
  padding: 0 5px;
}

.popular-count {
  font-size: 15px;
  margin-left: 8px;
}

.card-body:hover {
  cursor: pointer;

  .popular-count, #popular_creator {
    font-weight: bold;
  }

  .popular-icons {
    font-size: 17px;
  }

  #popular-title {
    text-decoration: underline;
    font-weight: bold;
  }
}
</style>
