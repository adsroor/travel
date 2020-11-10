<template>
  <div class="header">城市选择
  <router-link to="/">

  <div class="header-left">
   <span class="iconfont">&#xe67c;</span>
  </div>
  </router-link>
  </div>

</template>

<script>
export default{
  name:"CityHeader"
  }
</script>

<style scoped>
  .header{
    position: relative;
    overflow: hidden;
    height: 43px;
    line-height: 43px;
    text-align: center;
    color: #fff;
   background: #00bcd4;
  }
  .header-left{
    position: absolute;
    top: 0;
    left: 10px;
    width: 32px;
    text-align: center;
    font-size: 4px;
    color: #fff;
  }
</style>
