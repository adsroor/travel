<template>
<div class="header">
<div class="header-left">返回</div>
<div class="header-input">输入城市/景点/游玩主题</div>
<div class="header-right">城市</div>
</div>
</template>
<script>
export default{
  name:'HomeHeader'
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
