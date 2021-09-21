<template>
  <div class="nav">
     <ul>
         <li><router-link to="/" exact>博客</router-link></li>
         <li><router-link to="/addblog" exact>写博客</router-link></li>
     </ul>
  </div>
</template>

<script>
export default {
  name: "blogheader",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
ul{
    list-style: none;
    text-align: center;
    margin: 0;
}
li{
    display: inline-block;
    margin: 0 10px;
}
a{
    color: #fff;
    text-decoration: none;
    padding: 12px;
    border-radius: 4px;
}
.nav{
background-color: crimson;
padding: 30px 0;
margin-bottom: 40px;
}
.router-link-active{
    background: rgba(255,255,255,0.8);
    color: #444;
}
</style>
