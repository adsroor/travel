<template>
  <div>
  <div  class="search">
  <input  v-model="keyword" class="search-input" type="text"  placeholder="输入城市名或拼音"/>
  </div>
  <div class="search-content">
    123
  </div>
  </div>
</template>

<script>
export default{
  name:"CitySearch",
  props:{
    cities: Object
  },
  data () {
    return {
      keyword:''
    }
  }
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
.search-content{
  z-index: 1;
  overflow: hidden;
  position: absolute;
  top: 79px;
  left: 0;
  right: 0;
  bottom: 0;
  background: green;
}


</style>
