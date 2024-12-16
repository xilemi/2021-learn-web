<template>
  <el-scrollbar style="height: 100%;">
    <div class="">
      <!-- 用户没有登录时点击Q&A弹框未登录账号 -->
      <!-- 提交问题，回复问题 -->
      <!-- 问题显示提问者头像 id，回复问题显示回复者id 头像 -->
      <div class="title">
        <img src="../assets/image/user.png" alt="" class="photo">
        <span>企业名字</span>
        <span>浏览次数</span>
        <button @click='show()'>{{$store.state.attention}}</button>
      </div >
      <p class="request-title">发布留言</p>
        <p class="input-text">
          <el-input v-model='request' id="txt-quest"></el-input>
        </p>
        <p class="btn">
          <el-button @click='submit(request)'>提交</el-button>
        </p>
        <p class="request-title">企业留言</p>
        <div v-for='(item,index) in $store.state.requestData'>
          <ul>
            <!-- 这里还要带着用户id -->
            <li class="request-box">
              <span>用户id</span>
              {{item}}
              <!-- 一个输入框写东西 不所有的都变化 -->
              <el-input id="index" v-model='reply'></el-input>
              <el-button>回复</el-button>
            </li>
          </ul>
        </div>
    </div>
    </el-scrollbar>
</template>

<script>

export default {
  name: "QA",
  data() {
    return {
      request:'',
      reply:''
    }
  },
  methods: {
              show(){
                   this.$store.commit('attent')
                },
              submit(request){  
                this.$store.commit('commitQuest',this.request)
                this.request=''
              }
            },
}
</script>

<style scoped>

.title{
  width: 1440px;
  height: 100px;
  margin: 0 auto;
  background-color:#f5f5f5;
}
.title span{
  font-size: 18px;
  margin-left: 200px;
}
.title>button{
  font-size: 18px;
  margin-left: 200px;
  background-color: #f5f5f5;
}
.request-title{
  width: 90%;
  padding-left: 140px;
  margin: 20px auto 10px;
  font-size: 25px;
  text-align: left; 
  background-color: #5f5f5f;
  box-sizing: border-box;
}
.input-text{
  width: 90%;
  height: 100px;
  line-height: 100px;
  margin: 10px auto 0;
}
.input-text>textarea{
  outline: none;
}
.btn{
  width: 90%;
  height: 100px;
  line-height: 100px;
  margin: 0 auto;
}
.el-button{
  font-size: 20px;
  float: right;
}
.request-box{
  width: 90%;
  height: 200px;
  font-size: 30px;
  margin: 5px auto;
  background-color: #5f5f5f;

}
</style>
