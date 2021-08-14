<template>
  <div class="icons">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in page" :key="item.id">
        <div class="icons-item" v-for="page in item" :key="page.id">
          <img :src="page.imgUrl" alt="" />
          <p>{{ page.title }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "HomeIcon",
  data() {
    return {
      swiperOptions: {},
    };
  },
  props: {
    iconsList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    page() {
      let pages = [];
      this.iconsList.forEach((item, index) => {
        let idx = Math.floor(index / 8);
        if (!pages[idx]) {
            pages[idx]=[]
        }
         pages[idx].push(item);
      });
      return pages;
    },
  },
};
</script>

<style scoped lang='stylus'>

@import '~css/common.styl'
.icons {
  width: 100%;
  background-color: #fff;
}
.icons-item {
  width: 25%;
  float: left;
  height: 0;
  padding-bottom: 25%;
}
.icons-item img {
  width: 1.1rem;
  height: 1.1rem;
  display: block;
  margin: 0 auto;
  padding-top: 0.2rem;
}
.icons-item p {
  font-size: 0.1rem;
  text-align: center;
  textOverflow();
}

</style>