<template>
  <div class="">
    <div class="search-box">
      <div class="bar">
        <span>企业搜索</span>
        <!-- 这里需要判断是否有获取到用户id 来调控showid的真假 需要与 QA结合 判断 没有登录就不能打开qa-->
         <span v-show='!$store.state.showid'><a href="#">注册/</a><a href="#">登录</a></span>
         <span v-show='$store.state.showid'>用户id</span>
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
      <router-link to="/search/businessCard" tag="span">企业名片</router-link>
      <router-link to="/search/jobOffers" tag="span">在招职位</router-link>
      <!-- 没有获取到id点击Q&A弹出未登录 -->
      <router-link to="/search/QA" tag="span" @clcik='online()'>Q&A</router-link>
      </div>
    </div>
    <router-view class="children-view" style="height: 647px;"></router-view>
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
      // 从服务器获取数据 通过用户企业id查找
      this.$router.push({
        path:'/search/businessCard',
        query:{
         searchData:this.inputModel,
        }
      })
    },
    online(){
      
    }
  },
  components: {
  
  }
}
</script>

<style scoped>
        .search-box{
          width: 100%;
          height: 350px;
          background-color: #2E302F;
        }
        .bar span{
          color: #fff;
          font-size: 22px;
          margin-right: 5px;
          float:right;
        }
        .bar span:first-child{
          margin-left: 30px;
          font-size: 30px;
          float: left;
        }
        
        .search>input{
            background-color: white;
            width: 20%;
            font-size: 20px;
            line-height: 50px;
            margin-top: 90px;
            border: none;
            outline: none;
        }
        .search>input::placeholder{
          font-size: 22px;
        }
        .search>button{
            font-size:20px ;
            background-color: white;
            width: 7%;
            height: 50px;
            line-height: 50px;
            margin-top: 90px;
            border: none;
            cursor: pointer;
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
          margin-top: 120px;
          float: left;  
        }
        .children-view{
          margin-top: 10px;
          width: 100%;
          text-align: left;
        }
        .children>span{
          font-size: 30px;
          margin-left: 30px;
          color: white;
        }

</style>


