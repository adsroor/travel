<template>
  <div class="header">城市选择
  <div class="header-left">
    返回
  </div>
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
    background: #42B983;
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
