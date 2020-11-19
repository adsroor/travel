<template>
  <div>
    <div
      class="item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <div v-if="item.children" class="item-chilren">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>
<style scoped>
    .item-title-icon{
      position: relative;
      left: 3.3px;
      top: 3.3px;
      display: inline-block;
      width: 18px;
      height: 18px;
      background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -22px no-repeat;
      margin-right: 5px;
      background-size: 20px ;
      }
    .item-title{
      line-height: 40px;
      font-size: 16px;
      padding: 0 10px;
      }
    .item-chilren{
      padding: 0 10px;
      }
</style>
