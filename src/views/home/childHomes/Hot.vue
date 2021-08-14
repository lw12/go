<template>
  <div class="hot">
    <div class="hot-top">
      <img
        src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png"
        alt=""
      />
      <span>本周热门榜单</span>
      <span class="iconfont hot-title">全部榜单 &#xe665;</span>
    </div>
    <ul class="hot-list">
      <li class="hot-item" v-for="(item,index) in hotList" :key="index">
        <img :src="item.img" alt="" />
        <p>{{item.title}}</p>
        <p><span class="hot-mark">￥{{item.mark}}</span>起</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hot",
  props:{
      hotList:{
          type:Array,
          default(){
              return []
          }
      }
  }
};
</script>

<style scoped lang='stylus'>

@import '~css/common.styl'
.hot {
  margin-top: 0.2rem;
  background-color: #fff;
  font-size: 0.28rem;
}
.hot-top {
  padding: 0.2rem;
  position: relative;
}
.hot-top img {
  width: 0.3rem;
  height: 0.3rem;
}
.hot-top span {
  color: #212121;
  font-size: 0.32rem;
}
.hot-top .hot-title {
  position: absolute;
  right: 0.2rem;
  color: #616161;
  font-size: 0.28rem;
}
.hot-list {
    overflow-x:scroll;
    overflow-y: hidden;
    white-space: nowrap;
    height: 3rem;
}
.hot-item {
  display: inline-block;
  padding: 0 .2rem;
  width: 2rem;
  height: 2rem;
}
.hot-item img {
  width: 100%;
  height: 100%;
}
.hot-item p {
  margin-top: .1rem;
  text-align: center;
  font-size: .24rem;
  textOverflow();
}
.hot-item p .hot-mark{
    color:#ff8300;
    font-size:.28rem;
    padding-right: .1rem;
}
</style>