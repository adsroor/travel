<template>
  <div  class="search">
  <input class="search-input" type="text"  placeholder="输入城市名或拼音"/>
  </div>
</template>

<script>
export default{
  name:"CitySearch"
}
</script>

<style scoped>
.search{
  height: 36px;
  padding: 0 1px;
  background: #00bcd4;
  
}
.search-input{
  box-sizing: border-box;;
  width: 100%;
  height: 31px;
  padding: 0 2px;
  line-height: 31px;
  text-align: center;
  border-radius: 1px;
  color: #666;
}


</style>
