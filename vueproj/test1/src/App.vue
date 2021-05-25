<template>
  <div id="app">
    <h1>这是最大的标题固定在这里</h1>
    <!-- 这里写router-iink连接组件，同时还可以写一些固定的东西与组件并存-->
    <!-- router-link to='home' tag="button">home</router-link>
    <router-link to='about' tag="button">about</router-link> -->
    <router-link to='/home' tag="button">home</router-link>
    <router-link to='/about' tag="button">about</router-link>
    <router-link :to="'/user/'+userid" tag="button">user</router-link>
    <router-link :to='{path:"/profile",query:{name:"王瑞",year:21,height:175}}'tag="button">profile</router-link>
    <!-- <button @click='profile()'>profile</button> -->
   <keep-alive exclude='user,profile'>
    <router-view></router-view>
   </keep-alive>
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      userid:'wangrui'
    }
  },
  methods: {
    homeclick(){
      this.$router.push('/home')
    },
    aboutclick(){
      this.$router.push('/about')
    },
    profile(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'wangrui',
          year:20,
          height:175,
        }
      })
    }
  },
}
</script>

<style>
.test{
  color:#ef6700;
}
/* .router-link-active{
  color: blanchedalmond;
} */
</style>
