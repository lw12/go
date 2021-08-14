<template>
  <div class="like">
    <div class="like-top">
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png"
        alt=""
      />
      猜你喜欢
    </div>
    <ul>
      <li
        class="like-item border-bottom"
        @click="toDetail"
        v-for="(item, index) in likeList"
        :key="index"
      >
        <div class="like-img"><img :src="item.img" alt="" /></div>
        <div class="like-text">
          <div class="like-title">{{ item.title }}</div>
          <div class="like-message">{{ item.message }}条评论</div>
          <div class="like-map">
            <span class="like-mark">
                <b >￥{{ item.price }}</b>
                </span>起
            <span class="like-right">{{ item.address }}</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Like",
  props: {
    likeList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods:{
    toDetail(){
      this.$router.push('/detail')
    }
  }
};
</script>

<style scoped>
.like {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  background-color: #fff;
  padding: 0 0.2rem;
}
.like-top {
  padding: 0.2rem 0;
  font-size: 0.32rem;
}
.like-top img {
  width: 0.3rem;
  height: 0.3rem;
}
.like-item {
  position: relative;
  padding: 0.2rem 0;
  overflow: hidden;
}
.like-img {
  float: left;
}
.like-item img {
  width: 2rem;
  height: 2rem;
}
.like-text {
  padding-left: 0.2rem;
  overflow: hidden;
}
.like-title {
  font-size: 0.36rem;
  color: #212121;
  margin-top: 0.4rem;
}
.like-message {
  margin-top: 0.3rem;
  color: #616161;
  font-size: 0.24rem;
}
.like-map {
  margin-top: 0.3rem;
  color: #616161;
  position: relative;
}
.like-mark{
    color: #ff8300;
}
.like-mark b{
    font-size: .4rem;
    font-weight: normal;
}
.like-right{
    position: absolute;
    right: 0;
    font-size: .2rem;
}
</style>