<template>
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
    <div class="submit">
      <!-- 提问及回复提问 -->
      <textarea name="" id="" cols="200" rows="5"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: "Q&A",
  data() {
    return {
      
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
.submit{
  width: 95%;
  height: 100px;
  background-color: #5F5F5F;
  text-align: center;
  margin: 0 auto;
}

</style>
