<template>
  <div class="hot">
    <div class="hot-title">热门城市</div>
    <ul class="hot-list">
      <li class="hot-item" v-for="(item, index) in cityList" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Hot",
  props: {
    cityList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
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
  content: "";
  position: absolute;
  height: 100%;
  width: 33.3%;
  left: 33.3%;
  border-left: 0.02rem solid #ddd;
  border-right: 0.02rem solid #ddd;
}
.hot-item {
  width: 33.3%;
  text-align: center;
  height: 0.9rem;
  line-height: 0.9rem;
  float: left;
  border-bottom: 0.02rem solid #ddd;
}
</style>
