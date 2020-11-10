<template>
<ul class="list">
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
    <li class="item">A</li>
   
</ul>
</template>

<script>
export default{
  name:"CityAlphabet"
 }
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top:79px;
    right:0;
    bottom: 0;
    width: 20px;
}
  .item{
  line-height: 22px;
  text-align: center;
  color: #00bcd4;

}

</style>
