<template>
<div>
  <home-header :city="city"></home-header>
  <home-swiper :list="swiperList"></home-swiper>
  <home-icons></home-icons>
  <HomeRecommend :list="recommendList"></HomeRecommend>
  <home-weekend :list="weekendList"></home-weekend>
</div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'

export default{
  name:'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend

  },
  data () {
    return {
      city:'',
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: []
    }
  },
  methods:{
    //向后端请求数据
    getHomeInfo(){
      //后端接口
      axios.get('/api/index.json')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      //打印数据
      res = res.data
      if (res.ret && res.data){
        const data = res.data
        this.city = data.city
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.recommendList = data.recommendList
        this.weekendList = data.weekendList
      }

    }
  },
  //挂载
  mounted () {
    this.getHomeInfo()

  }
}

</script>
<style>

</style>
