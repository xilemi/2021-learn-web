<template>
  <div class="">
        <h1>我是用户{{user}}</h1>
        <h2>我是用户{{$route.params.userid}}</h2>
  </div>
</template>

<script>
export default {
  name: 'user',
  components: { 
    
  },
 computed:{
     user(){
         return this.$route.params.userid
     }
 },
 created() {
   console.log("user created");
 },
 destroyed() {
   console.log("user destoryed");
 },
}
</script>

<style scoped>
</style>
