<template>
    <div>
       <h2>我是home</h2>
       <router-link to="/home/homeNews">新闻</router-link>
       <router-link to='/home/homeMessage'>信息</router-link>
       <keep-alive>
        <router-view></router-view>
       </keep-alive>
       <h2>{{messgae}}</h2>
    </div>
</template>
<script>
    export default{
        name:'home',
        data() {
            return {
                messgae:'你好',
                path:"/home/homeNews"
            }
        },
        // 生命周期
        created() {
    },
    activated() {
        this.$router.push(this.path)
    },
    beforeRouteLeave (to, from, next) {
        console.log(this.$route.path);
        this.path=this.$route.path;
        next();
    }
    }
</script>