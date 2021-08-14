<template>
  <div class="sort">
    <div class="sort-title">字母排序</div>
    <ul class="sort-list">
      <li class="sort-item" v-for="(item, index) in citySort" :key="index">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Sort",
  props: {
    citySort: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.sort-title {
  font-size: 0.26rem;
  color: #212121;
  padding: 0.3rem;
}
.sort-list {
  position: relative;
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
