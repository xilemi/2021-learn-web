<template>
  <div class="contain" id="app">
    这里首先放置登录框
    <h2 class="title">登录</h2>
    <p class="first-p"><label for="">账号:
        <input type="text" v-model="id" placeholder="请输入账号" @click="change">
    </label></p>
    <p><label for="">密码:
        <input type="password" v-model="pwd" placeholder="请输入密码" @click="change">
    </label></p>
    <button>注册</button>
    <button @click="show">登录</button>
    <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      id:'',
      pwd:'',
    }
  },

  methods: {
        show(){
          this.$router.push({
            path:'/index',
            // 使用params需要配合那么使用 query则写path
            query:{
               id:this.id
            }
          })
              console.log("账号"+this.id);
              console.log("密码"+this.pwd);
            },
        change:function(){
          var input=document.getElementsByTagName("input");
          // 点击获取到点击的元素，然后对此元素修改即可
          for(var i=0;i<input.length;i++){
            input[i].onblur=function(){
               this.style.borderColor="blueviolet";
            }
            input[i].onfocus=function(){
              this.style.borderColor="#ef6700";
            }
          }
        }  ,
  },
  
}
</script>

<style>
 .contain{
            width: 500px;
            height: 300px;
            margin: 300px auto;
            background-color: #FFFFFF;
            border-radius: 20px;
            box-shadow: 2px 2px 25px #909399;
            text-align: center;
        }
        input{
            width: 300px;
            height: 30px;
            border-radius: 10px;
            /* 外框没有圆角属性 所以在focus时会出现原始的边框 这里取消掉 然后使用js来设置属性*/
            outline: 0;
            border: 1px solid blueviolet;
        }
        .title{
            padding-top: 20px;
        }
        .first-p{
            margin-bottom: 30px;
        }
</style>
