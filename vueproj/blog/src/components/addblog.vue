<template>
  <div id="addblog">
     <h2>写博客</h2>
     <form  v-if="!s">
      <label>标题:</label>
      <input type="text" v-model="blog.title">
      <label>内容:</label>
      <textarea v-model="blog.content"></textarea>
      <label>分类:</label>
      <div id="checkboxs" >
        <input type="checkbox" value="vue.js" v-model="blog.catagories">vue.js
          <input type="checkbox" value="node.js" v-model="blog.catagories">node.js
          <input type="checkbox" value="react.js" v-model="blog.catagories">react.js
          <input type="checkbox" value="angular.js" v-model="blog.catagories">angular.js
      </div>
      <label>作者</label>
      <select v-model="blog.author" >
        <option v-for="author in authors">{{author}}</option>
      </select>
      <button @click="post">提交文章</button>
     </form>
     <div v-if="s">
       <h3>提交成功!!!!</h3>
     </div>
     <div id="preview">
       <h3>博客总览</h3>
       <p>标题</p>
       <p>{{blog.title}}</p>
       <p>内容</p>
       <p>{{blog.content}}</p>
       <p>分类</p>
       <p>
           <!-- 读取分类 -->
         <li v-for="catagory in blog.catagories">{{catagory}}</li>
      </p>
      <p>作者</p>
       <p>{{blog.author}}</p>
     </div>
     
  </div>
</template>

<script>
export default {
  name: "addblog",
  data() {
    return {
      // 用来保存blog数据 对象
       blog:{
         title:'',
         content:'',
        //  以数组保存选中的分类
         catagories:[],
        //  保存选中的作者
         author:'',
        },
       s:false,
       authors:["111","2222","xile"]
    }
  },
  methods: {
    post(){
      this.$http.post("https://jsonplaceholder.typicode.com/posts",{
          title:this.blog.title,
          body:this.blog.content,
          userId:"1"
      }).then((data)=>{
        console.log(data);
        this.s=true;
      })

    }
  },
  components: {

  }
}
</script>

<style scoped>
#addblog *{
  box-sizing: border-box;
}
#addblog{
  margin: 20px auto;
  max-width: 600px;
  padding: 20px;
}
label{
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],textarea,section{
  display: block;
  width: 100%;
  padding: 8px;
}
textarea{
  height: 200px;
}
#checkboxs label{
  display: inline-block;
  margin-top: 0;
}
#checkboxs input{
  display: inline-block;
  margin-right: 10px;
}
li{
  list-style: none;
}
button{
  display: block;
  margin: 20px 0;
  background: coral;
  color: #fff;
  border: 0;
  font-size: 18px;
  border-radius: 4px;
  padding: 14px;
  cursor: pointer;
}
#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3{
  margin-top: 20px;
}
</style>
