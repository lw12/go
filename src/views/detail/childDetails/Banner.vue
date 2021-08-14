<template>
  <div class="banner">
    <div>
      <div class="banner-img" @click="showSwiper">
        <img
          src="//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_600x330_2200e5bf.jpg"
          alt=""
        />
      </div>
      <div class="banner-title">金海湖风景区(AAAA景区)</div>
    </div>
    <div class="img-swiper" v-show="imgSwiper" @click="hideSwiper">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="(item, index) in bannerList" :key="index">
          <img :src="item.imgUrl" />
        </swiper-slide>
       
      </swiper>
       <div class="swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
        },
      },
      imgSwiper: false,
      bannerList: [
        {
          id: "01",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_r_800x800_f2b5b8c3.jpg",
        },
        {
          id: "02",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_r_800x800_f2b5b8c3.jpg",
        },
        {
          id: "03",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_r_800x800_f2b5b8c3.jpg",
        },
        {
          id: "04",
          imgUrl:
            "//img1.qunarzz.com/sight/p0/201309/27/661acb22614eae2bc8d65eac.jpg_r_800x800_f2b5b8c3.jpg",
        },
      ],
    };
  },
  methods: {
    showSwiper() {
      this.imgSwiper = true;
    },
    hideSwiper() {
      this.imgSwiper = false;
    },
  },
};
</script>

<style scoped>
.banner {
  position: relative;
}
.banner-img {
  width: 100%;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  background-color: red;
}
.banner-img img {
  width: 100%;
}
.banner-title {
  position: absolute;
  bottom: 0.4rem;
  left: 0.3rem;
  font-size: 0.35rem;
  color: #fff;
}
.img-swiper {
  background-color: #000;
  position: fixed;
  top: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.img-swiper img {
  width: 100%;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  color: #fff;
  bottom: .6rem;
  font-size: .32rem;
}
</style>