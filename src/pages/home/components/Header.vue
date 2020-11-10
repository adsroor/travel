<template>
<div class="header">
<div class="header-left">
  <span class="iconfont ">&#xe67c;</span>
</div>
<div class="header-input">
  <span class="iconfont">&#xe602;</span>
  输入城市/景点/游玩主题

</div>
<router-link to="/city">
<div class="header-right">
  北京
  <span class="iconfont">&#xe648;</span>
</div>

</router-link>
</div>
</template>
<script>
export default{
  name:'HomeHeader',
  props:{
    city: String
  }
}
</script>
<style scoped>
    .header{
         display: flex;
         line-height: 43px;
         background: #00bcd4;
         color:#fff;
    }


    .header-left{
      width: 64px;
      float: left;
      text-align: center;



    }


    .header-input{
       flex:1;
       height: 32px;

       line-height: 32px;
       margin: 2px;

       padding-left: 15px;
       background: #fff;
       border-radius: 20px;

       color: #ccc;
    }

    .header-right{
           width: 64px;
           float: right;
           text-align:center;
           color: #fff;
    }




    .header-left{
      width: 64px;
      float: left;
      text-align: center;


    }


    .header-input{
       flex:1;
       height: 32px;

       line-height: 32px;
       margin: 5px;


       background: #fff;
       border-radius: 20px;

       color: #ccc;
    }

    .header-right{
           width: 64px;
           float: right;
           text-align:center;
    }
</style>
