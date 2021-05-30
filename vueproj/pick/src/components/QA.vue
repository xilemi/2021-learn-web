<template>
  <div class="">
    <!-- 用户没有登录时点击Q&A弹框未登录账号 -->
    <!-- 提交问题，回复问题 -->
    <!-- 问题显示提问者头像 id，回复问题显示回复者id 头像 -->
    <div class="">
      <div class="title">
        <img src="../assets/image/user.png" alt="" class="photo">
        <span>企业名字</span>
        <span>浏览次数</span>
        <button @click='show()' v-text='attention'></button>
      </div >
    </div>
    <div>
      <!-- 提问及回复提问 -->
    </div>
  </div>
</template>

<script>
import businessCard from '../components/businessCard'
export default {
  name: "Q&A",
  data() {
    return {
      isAttention:false,
      attention:'关注',
    }
  },
  methods: {
                show(){
                    if(this.isAttention==false){
                        this.isAttention=!this.isAttention
                        this.attention='已关注'
                        // 向用户的关注表里添加此企业
                    }
                    else if(this.isAttention==true){
                        this.isAttention=!this.isAttention
                        this.attention='关注'
                        // 向用户的关注表里删除此企业
                    }
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
</style>
