<template>
  <div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of list" :key="item.id">
      <div class="item-img-wrapper">
        <img  class="item-img"  :src="item.imgUrl"/>
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
    text-indent: 2px;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
  }
 .item-img{
    width: 100%;

}

 .item-title{
    line-height: 40px;
    font-size: 23px;
 }
 .item-desc{

   line-height: 4px;
   color: #ccc;

 }

</style>
