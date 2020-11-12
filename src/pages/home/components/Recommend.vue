<template>
  <div>
  <div class="recommend-title">热销推荐</div>
  <ul>
    <router-link
       tag="li"
       class="item border-bottom"
       v-for="item of list"
       :key="item.id"
       :to="'/detail/' + item.id">
      <div class="item-img-wrapper">
        <img  class="item-img"  :src="item.imgUrl"/>
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>
 </div>

    </router-link>
</ul>
  </div>
</template>

<script>
  export default{
    name:'HomeRecommend',
    props:{
      list: Array
    }
}
</script>

<style>
  .recommend-title{
    line-height: 40px;
    background: #eee;
    text-align: 2px;
  }
  .item{
    overflow: hidden;
    display: flex;
    height: 94px;
 }
  .item-img{
    width: 120px;
    height: 120px;
    padding: 1px;

}
 .item-info{
   flex: 1;
   padding:10px;
 }
 .item-title{
    line-height: 40px;
    font-size: 23px;
 }
 .item-desc{
   margin-top: 2px;
   line-height: 4px;
   color: #ccc;
 }
 .item-button{
   line-height: 9ox;
   margin-top: 10px;
   background: #ff9300;
   padding: 1px;
   border-radius: 2px;
   color: #fff;
 }
</style>
