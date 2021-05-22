<template>
    <div>
       <h2>我是home</h2>
       <router-link to="/home/homeNews">新闻</router-link>
       <router-link to='/home/homeMessage'>信息</router-link>
       <router-view></router-view>
    </div>
</template>
<script>
    export default{
        name:'home'
    }
</script>