<template>
   <div class="activity border-top">
    <div class="activity-item border-right">
     <img :src="activity[0]" alt="">
    </div>
    <div class="activity-item">
        <img :src="activity[1]" alt="">
    </div>
  </div>
</template>

<script>
export default {
    name:'Activity',
    props:{
        activity:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
  .activity{
      margin-top: .2rem;
      display: flex;
      position: relative;
      background-color: #fff;
  }
  .activity .activity-item{
      flex: 1;
      font-size: .28rem;
      text-align: center;
      height: 1.4rem;
  }
  .activity .activity-item img{
      width: 100%;
      height: 100%;
  }
</style>