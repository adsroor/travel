<template>
  <!--修复轮播图片还没有加载出来出现的抖动，加一个div区域，设置div的样式-->
  <div class="wrapper">
  <!--首页轮播图-->
  <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
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
  props:{
    list: Array
  },
  data () {
    return{
     swiperOption:{
       pagination:".swiper-pagination",
       loop:true
     }
    }
  },
  computed:{
    showSwiper () {
      return this.list.length
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

</style>
