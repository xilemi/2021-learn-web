<template>
  <div class="">
        <h1>我是用户{{user}}</h1>
        <h2>我是用户{{$route.params.userid}}</h2>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'user',
  components: { 
    
  },
 computed:{
     user(){
         return this.$route.params.userid
     }
 }
}
</script>

<style scoped>
</style>
