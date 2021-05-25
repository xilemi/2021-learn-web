<template>
  <div class="profile">
        <h2>
            用户信息
        </h2>
        <li>姓名:{{$route.query.name}}</li>
        <li>年龄:{{$route.query.year}}</li>
        <li>身高:{{$route.query.height}}</li>
  </div>
</template>

<script>
export default {
  name: "profile",
  data() {
    return {

    }
  },
  components: {

  },
  created() {
    console.log("profile created");
  },
  destroyed() {
    console.log("profile destoryed");
  },
}
</script>

<style scoped>
  .profile{
      font-size: 40px;
      background-color: bisque;
      list-style: none;
  }
</style>
