<template>
  <div class="search-cpn">
    <div class="bar">
        <p><a href="#">登录</a>&nbsp;<a href="#">注册</a></p>
    </div>
    <div class="search">
        <input type="text" v-model='inputModel'>
         <button @click='btnclick()'>pick</button>
    </div>
    <div class="tips">
        <span><a href="#">找高校</a></span>
        <span><a href="#">找企业</a></span>
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
            height: 300px;
            background-color: aquamarine;
            text-align: center;
            margin: 0 auto;
            display: block;
        }
        .bar{
            text-align: right;
        }
        .search>input{
            width: 300px;
            height: 24px;
            margin-top: 90px;
        }
        .search>button{
            width: 50px;
            height: 30px;
            margin-top: 90px;
        }
        .tips>span{
            width: 50px;
            margin-right: 10px;
        }
        a{
            color: black;
            text-decoration: none;
        }
        .children{
          position:absolute; 
          top: 280px;
        }
        .children-view{
          position: absolute;
          top: 380px;
          width: 100%;
          text-align: left;
          background-color: cornflowerblue;
        }
        .children>span{
          font-size: 30px;
          margin-left: 30px;
          color: white;
        }
</style>


