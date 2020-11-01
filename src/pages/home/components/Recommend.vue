<template>
  <div>
  <div class="recommend-title">热销推荐</div>
  <ul>
    <li class="item border-bottom" v-for="item of recommendList" :key="item.id">
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
    name:'HomeRecommend',
    data () {
      return {
      recommendList: [
        {
          id:'001',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/1901/1d/1daac7a000f52d24a3.img.jpg_200x200_2719dead.jpg",
          title:"武汉园博园博物馆",
          desc:"自然博物馆"
        },
        {
          id:'002',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/1607/20/203c0ab146ed4cd4b4.water.jpg_200x200_760014da.jpg",
          title:"武汉两江游览",
          desc:"自然博物馆"
        },
        {
          id:'003',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/1506/8e/8ebc6b2d920fa594.water.jpg_200x200_d48dd312.jpg",
          title:"船长9号",
          desc:"自然博物馆"
        },
        {
          id:'004',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/2008/70/70bb5995043d854ca3.water.jpg_200x200_dc782f61.jpg",
          title:"木兰天池",
          desc:"自然博物馆"
        },
        {
          id:'005',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/1610/dd/dd551df7e916bf19a3.img.jpg_200x200_9090275d.jpg",
          title:"知音号",
          desc:"自然博物馆"
        },
        {
          id:'006',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/1705/99/99cad7081abb9771a3.img.jpg_200x200_d86753f0.jpg",
          title:"东湖海洋世界",
          desc:"自然博物馆"
        },{
          id:'007',
          imgUrl:"https://imgs.qunarzz.com/sight/p0/1804/2e/2e5fbd015eda2f4a3.img.jpg_200x200_f4ecaca3.jpg",
          title:"嘟噜嘟噜动物科普中心（壹方动物园）",
          desc:"自然博物馆"
        }

      ]
      }
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
    width: 90px;
    height: 90px;
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
