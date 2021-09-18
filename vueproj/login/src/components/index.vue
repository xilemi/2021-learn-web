<template>
  <div class="index">
      欢迎:
      {{msg}}
      ????
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
     msg:'',
  }
},
methods: {
  // 生命周期/
},
created() {
  // 这个用于登录后显示用户信息，如果要切换信息，那么这个页面是被销毁的，所以占时不需要别数据刷新的功能
  this.msg=this.$route.query.id
},

}
</script>

<style scoped>

</style>
