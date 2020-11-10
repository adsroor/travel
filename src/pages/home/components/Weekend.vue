<template>
  <div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-img-wrapper">
        <img  class="item-img"  :src="item.imgUrl"/>
      </div>
      <div class="item-info">
        <p class="item-title">{{item.title}}</p>
        <p class="item-desc">{{item.desc}}</p>
        <button class="item-button">查看详情</button>

      </div>
    </li>
</ul>
  </div>
</template>

<script>
  export default{
    name:'HomeWeekend',
    props:{
      list: Array
    }



  }
</script>

<style>
  .title{
    line-height: 40px;
    background: #eee;
    text-align: 2px;
  }
  .item-img-wrapper{
    overflow: hidden;
    display: flex;
    height: 94px;
    padding-bottom: 33.9%;


  }
  .item-img{
    width: 130px;
    height: 120px;
    padding: 5px;

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
