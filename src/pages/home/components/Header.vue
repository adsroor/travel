<template>
<div class="header">
<div class="header-left">
  返回
</div>
<div class="header-input">
  输入城市/景点/游玩主题

</div>
<router-link to="/city">
<div class="header-right">
  北京
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
       margin: 5px;


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
