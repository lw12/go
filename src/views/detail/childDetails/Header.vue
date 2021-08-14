<template>
  <div class="header">
    <div class="header-return" v-show="showHeader">
      <span class="border-return"></span>
      <span class="iconfont return" @click="toHome"> &#xe624; </span>
    </div>
    <div class="header-top" v-show="!showHeader" :style="styleOpacity">
      <div class="header-left">
        <span class="iconfont" @click="toHome"> &#xe624; </span>
      </div>
      北京国际鲜花港
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      showHeader: true,
      styleOpacity: {
        opacity: 0,
      },
    };
  },
  mounted() {
    let That = this;
    window.addEventListener("scroll", function () {
      let top = document.documentElement.scrollTop;
      if (top > 45) {
        let opacity = top / 130;
        opacity = opacity > 1 ? 1 : opacity;
        That.styleOpacity = { opacity };
        That.showHeader = false;
      } else {
        That.showHeader = true;
      }
    });
  },
  methods:{
    toHome(){
      this.$router.push('/')
    }
  }
};
</script>

<style scoped lang='stylus'>
@import '~css/var.styl';

.header-return {
  position: absolute;
  left: 0.1rem;
  top: 0.1rem;
  width: 0.72rem;
  height: 0.72rem;
}

.border-return {
  display: block;
  background-color: #000;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  border-radius: 0.36rem;
}

.return {
  position: absolute;
  color: #fff;
  left: 0;
  top: 0;
  width: 0.72rem;
  line-height: 0.72rem;
  text-align: left;
  text-indent: 0.17rem;
  font-size: 0.33rem;
  font-weight: bold;
}

.header-top {
  opacity: 0.5;
  z-index: 99;
  position: fixed;
  top: 0;
  text-align: center;
  width: 100%;
  line-height: 0.88rem;
  background-color: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
}

.header-left {
  position: absolute;
  width: 0.4rem;
  padding: 0 0.2rem;
  font-weight: bold;
}
</style>