<template>
  <div class="">
        <div class="title">
          <img :src="businessHearder" alt="" class="photo">
          <span>企业名字</span>
          <span>浏览次数</span>
          <button @click='show()'>{{$store.state.attention}}</button>
        </div>
        <div class="item">
        <p>宣传视频:</p>
        <p>企业特点:</p>
        <p>公司简介:</p>
        <p>公司文化:</p>
        <p>公司愿景:</p>
        <p>公司架构:</p>
        <p>产品/服务介绍:</p>
        <p>工商信息:</p>
        <p>公司地址:</p>
        <p>荣誉墙:</p>
        <p>风采展:</p>
        <p>提升机制:</p>
        <p>实训生名额及内容:</p>
        <p>联系方式:</p>
        </div>
  </div>
</template>

<script>
export default {
  name: "businessCard",
  data() {
    return {
      businessHearder:require('../assets/image/企业名片.png'),
    }
  },
  methods: {
show(){
       this.$store.commit('attent')
      }
    },
}
</script>

<style scoped>
  
  .photo{
    width: 100px;
    height: 100px;
    background-color: cornsilk;
    border-radius: 100%;
    margin-left: 100px;
  }
.title{
  width: 1440px;
  height: 100px;
  background-color:#f5f5f5;
  margin: 0 auto;
}
.title span{
  font-size: 18px;
  margin-left: 15%;
}
.title>button{
  font-size: 18px;
  margin-left: 10%;
  background-color: #f5f5f5;
}
.item{
  width: 100%;
}
.item p{
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item p:nth-child(odd){
  color: white;
  background-color: #5F5F5F;
}
.item p:nth-child(even){
  color: black;
  background-color: #f5f5f5;
}
</style>
