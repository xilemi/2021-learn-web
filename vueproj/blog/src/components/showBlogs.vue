<template>
  <div id="show-blogs" v-theme:column="'wide'">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div id="blog" v-for="blog in blogsSearch">
         <h2 v-rainbow @click="detail(blog.id)">{{blog.title}}</h2> 
          <article>{{blog.content | short}}</article>
      </div>
  </div>
</template>

<script>
export default {
  name: "showBlogs",
  data() {
    return {
      blogs:[],
      search:"",
    }
  },
  methods: {
    detail(id){
      this.$router.push(
        {
          path:'/detailblog',
          query:{
             id:id
          }
        }
      )
    }
  },
  created() {
      this.$http.get("https://blogs-69dd3-default-rtdb.firebaseio.com/posts.json").then((data)=>{
        return data.json()
        // arr是数组，但是传递给blogs就成了对象，但是对象又没有filter函数 只能将数组名作为id传入
      }).then((data)=>{
        var blogsArr=[];
        for(let key in data){
          data[key].id=key;
          blogsArr.push(data[key]);
        }
        this.blogs=blogsArr;
        console.log(this.blogs);
      })
  },
  filters:{
    //   过滤器用法 在需要过滤的元素后面写上过滤器名字
    //   然后以过滤器名字作为方法名
    toUppercase(value){
        return value.toUpperCase();
    },
    short(value){
        return value.slice(0,60)+"...";
    }
  },
  computed:{
    //   计算属性 
      blogsSearch(){
          return this.blogs.filter((blog)=>{
              return blog.title.match(this.search);
          })
      }
  }
}
</script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0 auto;
}
#blog{
padding: 20px;
margin: 20px 0;
box-sizing: border-box;
background: #eee;
border-radius: 4px;
}
input{
    display: block;
    width: 100%;
    height: 25px;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 4px;
    border: none;
    font-size: 20px;
}
h2{
  cursor: pointer;
}
</style>
