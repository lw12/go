<template>
  <div class="header">
    <div class="header-left">
      <span class="iconfont"> &#xe624; </span>
    </div>
    <div class="header-search">
      <span class="iconfont"> &#xe632; </span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right" @click="toCity">
      <!-- <router-link to='/city'>  -->
      <!-- {{$store.state.city}} -->
      {{ city }}
      <!-- {{li}} -->
      <span class="iconfont"> &#xe6aa; </span>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  methods: {
    toCity() {
      this.$router.push("/city");
    },
  },
  computed: {
    ...mapState(["city"]),
    //  ...mapState({
    //    li:'city'
    //  })
  },
};
</script>

<style scoped lang='stylus'>
@import '~css/var.styl';

.header {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background-color: $bgColor;
  color: $textColor;
  font-size: 0.36rem;
  display: flex;
}

.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  font-weight: bold;
}

.header-search {
  flex: 1;
  height: 0.6rem;
  line-height: 0.6rem;
  padding-left: 0.2rem;
  background-color: #fff;
  color: #e4e7ea;
  margin: 0.14rem 0;
  border-radius: 0.2rem;
  font-size: 0.28rem;
}

.header-right {
  padding: 0 0.2rem;
  font-size: 0.28rem;
}
</style>