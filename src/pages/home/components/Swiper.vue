<template>
  <!--修复轮播图片还没有加载出来出现的抖动，加一个div区域，设置div的样式-->
  <div class="wrapper">
  <!--首页轮播图-->
  <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img " :src="item.imgUrl"/>

      </swiper-slide>


      <div class="swiper-pagination"  slot="pagination"></div>

   </swiper>
  </div>
</template>
<!--首页逻辑模块-->
<script>
export default{
  name:'HomeSwiper',
  data () {
    return{
     swiperOption:{
       pagination:".swiper-pagination",
       loop:true
     },
     swiperList:[{
       id:"oo1",
       imgUrl:"https://imgs.qunarzz.com/vs_ceph_vcimg/b8c4527c41649814cc4cf86880abba54.jpeg"
     },
     {
       id:"oo2",
       imgUrl:"https://imgs.qunarzz.com/vs_ceph_vcimg/1cfbdaa2682ada2f854ea6114b3677c8.jpeg"
     }]
    }
  }
}
</script>
<!--首页样式-->
<style>

  .wrapper{
    overflow: hidden;
    width: 100%;
    height:0;
    padding-bottom: 31.25%;
    background: #eee;
  }
  .swiper-img{
    width: 100%;
  }
</style>