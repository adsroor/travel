<template>
  <!--首页iconfont图标的使用-->
  <div class="icons">
    <swiper>
      <swiper-slide>
    <div class="icon" v-for="item of iconList" :key="item.id">
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
   data () {
     return {
       iconList:[
         {
           id:"0001",
           imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/158387fe5376294f3776d01358d6b73b.png",
           desc:"景点门票"
         },
         {
           id:"0002",
           imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png",
           desc:"木兰天池"
         },
         {
           id:"0003",
           imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png",
           desc:"户部巷"
         },
         {
           id:"0004",
           imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/a40ee278d67000f2a29d2e20f6a029b3.png",
           desc:"自然风光"
         },
         {
           id:"0005",
           imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/b7a5e6b1774eda4fc9e32588f1d00c94.png",
           desc:"踏青赏花"
         },
         {
           id:"0006",
           imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/59bc59a3c38261e9a3f2f991a9ce0d21.png",
           desc:"武汉必游"
         },
         {
           id:"0007",
           imgUrl:"https://imgs.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png",
           desc:"三峡风光"
         },
         {
           id:"0008",
           imgUrl:"https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/c4c5c620f20535ff358788a508c20921.png",
           desc:"武汉欢乐谷"
         },

       ]
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
