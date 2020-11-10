<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
     <div class="title border-topbottom">当前城市</div>
     <div class="button-list">
       <div class="button-wrapper">
         <div class="button">北京</div>
       </div>

     </div>
    </div>
    <div class="area">
    <div class="title border-topbottom">热门城市</div>
    <div class="button-list">
      <div class="button-wrapper">
        <div class="button">北京</div>
      </div>
      <div class="button-wrapper">
        <div class="button">北京</div>
      </div>
      <div class="button-wrapper">
        <div class="button">北京</div>
      </div>
      <div class="button-wrapper">
        <div class="button">北京</div>
      </div>
      <div class="button-wrapper">
        <div class="button">北京</div>
      </div>
      
     

    </div>
   </div>
   <div class="area">
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>

    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>

    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>

    </div>
    <div class="title border-topbottom">A</div>
    <div class="item-list">
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>
      <div class="item border-topbottom">阿拉尔</div>

    </div>
   </div>
  </div>
  </div>

</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name:"CityList",
mounted () {
  this.scroll = new Bscroll(this.$refs.wrapper)

  }
  }
</script>

<style scoped>
   .list{
     overflow: hidden;




   }
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
