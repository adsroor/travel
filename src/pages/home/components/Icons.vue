<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
      <img  class="icon-img-content" :src="item.imgUrl"/>
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
     </swiper-slide>

    </swiper>
</div>
</template>

<script>
 export default{
   name: 'HomeIcons',
    props: {
      list: Array
    },
    data () {
      return {
        swiperOption: {
          autoplay: false
        }
      }
    },
   computed:{
     pages () {
        const pages = []
             this.list.forEach((item, index) => {
               const page = Math.floor(index / 8)
               if (!pages[page]) {
                 pages[page] = []
               }
               pages[page].push(item)
             })
             return pages
           }
   }
 }
</script>

<style>

  .icons{
    overflow: hidden;
    height: 0;
    padding-bottom: 50%;
    margin-top: 8px;

  }
  .icon{
    position: relative;
    overflow: hidden;
    float: left;
    width: 25%;
    height: 0;
    padding-bottom: 25%;

  }
    .icon-img{
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 44px;
    box-sizing: border-box;
    padding: 2px;

    }
    .icon-img-content{
      height: 100%;

      display: block;
      margin: 0 auto;
    }
    .icon-desc{
      position: absolute;
      left: 0;
      top:64px;
      right: 0;
      bottom:0;

      height: 20px;
      line-height: 25px;
      color: #333;
      text-align: center;

    }


</style>
