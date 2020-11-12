<template>
  <div>
    <router-link 
    tag="div" 
    to="/" 
    class="abs">
      <span class="iconfont abs-back ">&#xe67c;</span>
    </router-link>
    <div class="fixed">
      <router-link 
       to="/" >
        <span class="iconfont fixed-back "></span>
      </router-link>
      景点详情
    </div>
  </div>
</template>
<script>
export default{
  name:'DetailHeader'
}
</script>
<style scoped>
  .abs{
    position: absolute;
    left: 0;
    top: 10px;
    line-height: 20px;
    width: 40px;
    height: 40px;
    text-align: center;
    border-radius: 20px;
  }
  .abs-back{
    color: #fff;
    font-size: 20px;
  }
  .fixed{
    position: relative;
    overflow: hidden;
    height: 43px;
    line-height: 43px;
    text-align: center;
    color: #fff;
   background: #00bcd4;
  }
  .fixed-back{
    position: absolute;
    top: 0;
    left: 10px;
    width: 32px;
    text-align: center;
    font-size: 4px;
    color: #fff;
  }
</style>
