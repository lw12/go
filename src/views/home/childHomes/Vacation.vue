<template>
  <div class="vacation">
    <div class="vacation-title">周末去哪儿</div>
    <ul>
      <li class="vacation-item" v-for="(item, index) in vacation" :key="index">
        <div class="vacation-img">
          <img :src="item.img" alt="" />
        </div>
        <div class="vacation-msg">
          <p>{{ item.title }}</p>
          <p>{{ item.message }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Vacation",
  props: {
    vacation: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.vacation-title {
  font-size: 0.32rem;
  padding: 0.24rem;
}
.vacation-item {
  background-color: #fff;
  font-size: .28rem;
  margin-bottom: .1rem;
}
.vacation-img {
  width: 100%;
  height: 0;
  padding-bottom: 37.4375%;
}
.vacation-img img {
  width: 100%;
}
.vacation-msg{
    padding:.2rem 0 .2rem .2rem;
}
.vacation-msg p{
  margin-top: .2rem;
}
.vacation-msg p+p{
    color: #616161;
    font-size: .24rem;
}
</style>>

</style>