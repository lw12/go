<template>
  <div class="home">
    <HomeHeader></HomeHeader>
    <home-swiper :banners="banners"></home-swiper>
    <home-icon :iconsList="iconsList"></home-icon>
    <home-location></home-location>
    <home-activity :activity="activity"></home-activity>
    <home-hot :hotList="hotList"></home-hot>
    <home-like :likeList="likeList"> </home-like>
    <home-vacation :vacation="vacation"></home-vacation>
  </div>
</template>

<script>
import { mapState } from "vuex";
import HomeHeader from "./childHomes/Header";
import HomeSwiper from "./childHomes/Swiper";
import HomeIcon from "./childHomes/Icon.vue";
import HomeLocation from "./childHomes/Location.vue";
import HomeActivity from "./childHomes/Activity.vue";
import HomeHot from "./childHomes/Hot.vue";
import HomeLike from "./childHomes/Like.vue";
import HomeVacation from "./childHomes/Vacation";

import { getHome } from "network/home.js";
export default {
  name: "Home",
  data() {
    return {
      banners: [],
      iconsList: [],
      activity: [],
      hotList: [],
      likeList: [],
      vacation: [],
      changeCity: "",
    };
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeLocation,
    HomeActivity,
    HomeHot,
    HomeLike,
    HomeVacation,
  },
  computed: {
    ...mapState(["city"]),
  },
  methods: {
    // 只有上海，香港，深圳有数据,而且只有上海数据是全的
    getHttp() {
      getHome("/static/api/db.json").then((res) => {
        console.log(res);
        // let re = res.data.data[0];
        // this.banners = re.banner;
        // this.iconsList = re.iconsList;
        // this.activity = re.activity;
        // this.hotList=re.hotList;
        // this.likeList=re.likeList;
        // this.vacation=re.vacation
        let re = res.data.data;
        re.forEach((item, index) => {
          if (item.city == this.city) {
            this.banners = item.banner;
            this.iconsList = item.iconsList;
            this.activity = item.activity;
            this.hotList = item.hotList;
            this.likeList = item.likeList;
            this.vacation = item.vacation;
          }
        });
      });
    },
  },
  mounted() {
    this.changeCity = this.city;
    this.getHttp();
  },
  activated() {
    if (this.city != this.changeCity) {
      this.getHttp();
      this.changeCity = this.city;
    }
  },
};
</script>

<style scoped>
.home {
  background-color: #f5f5f5;
}
</style>