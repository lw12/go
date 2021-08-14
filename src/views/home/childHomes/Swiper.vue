<template>
  <div class="header-swiper">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in banners" :key="index">
        <img :src="item" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
        },
		loop:true
      },
    };
  },
};
</script>

<style scoped>
.header-swiper {
 background-color :#ccc;
 height:0 ;
 padding-bottom: 26.67%;
}
.header-swiper img {
  width: 100%;
  height: 100%;
}
.header-swiper img:nth-child(-n + 2) {
  height: 2rem;
}
.header-swiper >>> .swiper-pagination-bullet-active{
	background-color:#fff;
}
</style>

