<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
     <div class="title border-topbottom">当前城市</div>
     <div class="button-list">
       <div class="button-wrapper">
         <div class="button">
         {{this.currentCity}}
         </div>
       </div>
     </div>
    </div>
    <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper"
           v-for="item of hot"
           :key="item.id"
           @click="handleCityClick(item.name)">
        <div class="button">
        {{item.name}}</div>
      </div>
    </div>
   </div>
   <div class="area"
        v-for="(item,key) of cities"
        :key="key">
    <div class="title border-topbottom">
    {{key}}
    </div>
    <div class="item-list">
      <div class="item border-topbottom"
           v-for="innerItem of item"
           :key="innerItem.id"
           @click="handleCityClick(innerItem.name)">
           {{innerItem.name}}
       </div>
      </div>
 </div>
  </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default{
  name:"CityList",
  props:{
  hot: Array,
  cities: Object,
  },
  computed:{
    ...mapState({
      currentCity:'city'
    })
  },
  //实现数据共享vuex
   methods: {
      handleCityClick (city) {
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
  //右侧字母表滚动
   mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper, {
        click: true
      })
    }
  }
</script>
<style scoped>
   .list{
     overflow: hidden; }
  .title{
    line-height: 20px;
    padding-left: 10px;
    background: #eee;
    color: #666;
    font-size: 2px;
  }
  .button-list{
    overflow: hidden;
    padding: 5px;
 }
  .button-wrapper{
    float: left;
    width: 33.33%;
}
  .button{
    margin: 5px;
    padding: 5px 0;
    text-align: center;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .item{
    line-height: 37px;
    padding-left: 10px;
    color: #666;
  }
</style>
