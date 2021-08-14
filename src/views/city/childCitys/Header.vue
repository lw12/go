<template>
  <div class="header">
    <div class="header-left" @click="toHome">
      <span class="iconfont"> &#xe624; </span>
    </div>
    <div class="header-title">
        城市选择
    </div>
  </div>
</template>

<script>
export default {
   name:'Header',
   methods:{
       toHome(){
           this.$router.push('/')
       }
   }
}
</script>

<style scoped lang='stylus'>

@import '~css/var.styl'
.header {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  background-color:$bgColor;
  color:$textColor;
  font-size: 0.36rem;
  position relative
}
.header-left {
  width: 0.4rem;
  padding: 0 0.2rem;
  font-weight: bold;
  position absolute
}
.header-title{
    text-align center;
    font-size:.32rem;
}
</style>