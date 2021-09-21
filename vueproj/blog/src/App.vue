<template>
  <div id="app">
   <blogheader></blogheader>
   <router-view></router-view>
  </div>
</template>

<script>
import addblog from './components/addblog'
import showBlogs from './components/showBlogs'
import blogheader from './components/blogheader'
export default {
  name: 'App',
  components:{
    addblog,
    showBlogs,
    blogheader,
  },
}
</script>

<style>

</style>
