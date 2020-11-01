<template>
  <div>
  <div class="title">周末去哪儿</div>
  <ul>
    <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
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
    data () {
      return {
      weekendList: [
        {
          id:'001',
          imgUrl:"https://imgs.qunarzz.com/sight/source/1509/84/96e0a5830d7c99.jpg_r_640x214_ee164725.jpg",
          
        },
        {
          id:'002',
          imgUrl:"https://imgs.qunarzz.com/sight/source/1505/d5/abe8a48a6ef8bf.jpg_r_640x214_7c41cc81.jpg",
          
        },
        {
          id:'003',
          imgUrl:"https://imgs.qunarzz.com/sight/source/1711/4f/59f533696344fe.jpg_r_640x214_f8aa8c8f.jpg",
         
        }


      ]
      }
    }


  }
</script>

<style>
  .title{
    margin-top: 3px;
    line-height: 40px;
    background: #eee;
    text-indent: 2px;
  }
  .item-img-wrapper{
    overflow: hidden;
    height: 0;
    padding-bottom: 33.9%;
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
