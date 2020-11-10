<template>
<ul class="list">
    <li class="item"
    v-for="(item, key) of cities"
    :key="key">
    {{key}}
    </li>


</ul>
</template>

<script>
export default{
  name:"CityAlphabet",
  props:{
    cities: Object
  }
 }
</script>

<style scoped>
  .list{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top:300px;
    right:0;
    bottom: 100px;
    width: 20px;
}
  .item{
  line-height: 15px;
  text-align: center;
  color: #00bcd4;

}

</style>
