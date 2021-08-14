<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <!-- hot -->
      <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
          <li class="hot-item" v-for="(item, index) in cityList" 
          :key="index" @click="changeCityName(item.name)">
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- sort -->
      <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
          <li
            class="sort-item"
            v-for="(item, index) in citySort"
            :key="index"
            @click="changeSort(item.name)"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <!-- list -->
      <div class="list">
        <div v-for="(item, k, index) in citys" :key="index" :ref="k">
          <div class="list-title">{{ k }}</div>
          <ul class="list-list">
            <li  @click="changeCityName(i.name)" class="list-item" v-for="(i, index) in item" :key="index">
              {{ i.name }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { mapMutations } from 'vuex'
export default {
  name: "List",
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    citys: {
      type: Object,
      default() {
        return {};
      },
    },
    cityList: {
      type: Array,
      default() {
        return [];
      },
    },
    citySort: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      observeDOM: true,
      observeImage: true,
      // probeType:3,监听位置
      // pullUpLoad:true监听到底部
      click: true,
    });
  },
  methods:{
    changeSort(sortName){
       this.scroll.scrollToElement(this.$refs[sortName][0],2000)
    },
    changeCityName(cityName){
      this.changeCity(cityName)
      // this.$store.commit('changeCity',cityName)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  }
};
</script>

<style scoped lang='stylus'>
@import '~css/common.styl';

.list-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}

.list-list {
  position: relative;
  background-color: #fff;
  font-size: 0.28rem;
  color: #212121;
  overflow: hidden;
}

.list-list::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 25%;
  left: 25%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.list-list::after {
  content: '';
  position: absolute;
  height: 100%;
  width: 0%;
  left: 75%;
  border-left: 0.02rem solid #ddd;
}

.list-item {
  position relative
  width: 25%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
  textOveflow();
}

.hot-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}

.hot-list {
  position: relative;
  background-color: #fff;
  font-size: 0.28rem;
  color: #212121;
  overflow: hidden;
}

.hot-list::before {
  content: '';
  position: absolute;
  height: 100%;
  width: 33.3%;
  left: 33.3%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}

.hot-item {
  position relative
  width: 33.3%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
}

.sort-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}

.sort-list {
  background-color: #fff;
  font-size: 0.28rem;
  color: #212121;
  overflow: hidden;
}

.sort-item {
  width: 16.6%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
}
</style>