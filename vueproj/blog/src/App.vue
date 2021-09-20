<template>
  <div id="app">
   <addblog></addblog>
   <showBlogs></showBlogs>
   <!-- <h2 @click.per="addblog">博客</h2>
   <h2 @click="blog">写博客</h2> -->
  </div>
</template>

<script>
import addblog from './components/addblog'
import showBlogs from './components/showBlogs'
export default {
  name: 'App',
  components:{
    addblog,
    showBlogs,
  },
  methods: {
    addblog(){
      this.$router.push({
        path:'/addblog'
      });
    },
    blog(){
      this.$router.push({
        path:'/showBlogs'
      });
    }
  },
}
</script>

<style>

</style>
