<template>
  <div id="detailblog">
    <div id="blog">
        <h2 v-rainbow>{{blog.body.title | toUppercase}}</h2>
        <article>{{blog.body.content}}</article>
        <h3>作者:{{blog.body.author}}</h3>
        <h4>
          <ul>标签:
            <li v-for="catagory in blog.body.catagories">
            {{catagory}}
          </li></ul>
        </h4>
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
      this.$http.get("https://blogs-69dd3-default-rtdb.firebaseio.com/posts/"+this.id+".json").then((data)=>{
        console.log(data);
        this.blog=data
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
#detailblog{
  max-width: 1226px;
  margin: 0 auto;
}
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
li{
  list-style: none;
}

</style>
