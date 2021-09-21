<template>
  <div class="detailblog">
    <div id="blog">
        <h2 v-rainbow>{{blog.title | toUppercase}}</h2>
        <article>{{blog.body}}</article>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
        blog:[],
        id:this.$route.query.id
    }
  },
  created() {
      this.$http.get("https://jsonplaceholder.typicode.com/posts/"+this.id).then((data)=>{
          this.blog=data.body;
      })
  },
  filters:{
      toUppercase(value){
          return value.toUpperCase();
      }
  }
}
</script>

<style scoped>
#blog{
padding: 20px;
margin: 20px 0;
box-sizing: border-box;
background: #eee;
border-radius: 4px;
}
h2{
    font-size: 30px;
}
</style>
