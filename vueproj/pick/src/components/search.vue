<template>
  <div class="search-cpn">
    <div class="bar">
        <span>企业搜索</span>
        <span><a href="#">注册</a></span>
        <span><a href="#">登录/</a></span>
        
    </div>
    <div class="search">
        <input type="text" v-model='inputModel' placeholder="请输入企业名">
         <button @click='btnclick()'>pick</button>
    </div>
    <div class="tips">
        <span><a href="#">找高校</a></span>
        <span><a href="#">找岗位</a></span>
        <span><a href="#">找用户</a></span>
    </div>
    <div class="children" >
    <router-link to="/search/businessCard" tag="span">企业名片 </router-link>
    <router-link to="/search/jobOffers" tag="span">招聘信息</router-link>
    <router-link to="/search/QA" tag="span">Q&A</router-link>
    </div>
    <router-view class="children-view"></router-view>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      inputModel:'',
      searchData:'',
    }
  },
  methods: {
    btnclick(){
      this.$router.push({
        path:'/search/businessCard',
        query:{
         searchData:this.inputModel,
        }
      })
    }
  },
  components: {
  
  }
}
</script>

<style scoped>
.search-cpn{
            width: 100%;
            height: 320px;
            background-color: #2E302F;
            text-align: center;
            margin: 0 auto;
            display: block;
        }
        .bar span{
          font-size: 22px;
          margin-right: 5px;
          float:right;
        }
        .bar span:first-child{
          font-size: 30px;
          float: left;
        }
        .search>input{
            background-color: white;
            width: 400px;
            height: 48px;
            margin-top: 90px;
            border: none;
        }
        .search>button{
            background-color: white;
            width: 100px;
            height: 50px;
            margin-top: 90px;
            border: none;
        }
        .tips>span{
            
            width: 50px;
            margin-right: 10px;
            font-size: 22px;
        }
        a{
            color: white;
            text-decoration: none;
        }
        .children{
          position:absolute; 
          top: 280px;
        }
        .children-view{
          position: absolute;
          top: 350px;
          left: 15px;
          width: 100%;
          text-align: left;
        }
        .children>span{
          font-size: 30px;
          margin-left: 30px;
          color: white;
        }
</style>


