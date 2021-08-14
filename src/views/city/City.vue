<template>
  <div class="city">
    <city-header></city-header>
      <city-list class="scroll" :citys="citys" :cityList="cityList" :citySort="citySort"></city-list>
  </div>
</template>

<script>
import CityHeader from "./childCitys/Header";
import cityList from "./childCitys/List.vue";
import { getCity } from "network/home.js";
export default {
  name: "City",
  data() {
    return {
      cityList: [],
      citySort: [],
      citys: {},
    };
  },
  components: {
    CityHeader,
    cityList,
  },
  created() {
    getCity("/api/city.json").then((res) => {
      let re = res.data;
      this.cityList = re.data.cityList;
      this.citySort = re.data.citySort;
      this.citys = re.citys;
      console.log(re);
      console.log(res);
    });
  },
};
</script>

<style scoped>
.city {
  background-color: #f5f5f5;
  height: 100vh;
  position: relative;
}
.scroll {
   height: calc(100% - 44px);
   overflow: hidden;
}
</style>