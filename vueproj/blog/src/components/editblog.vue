<template>
    <div id="addblog">
       <h2>编辑博客</h2>
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
        <!-- <select v-model="blog.author" >
          <option v-for="author in authors">{{author}}</option>
        </select> -->
        <!-- 将选择作者改为输入作者 -->
        <input type="text" v-model="blog.author">
        <button @click.prevent="post">提交修改</button>
       </form>
       <div v-if="s">
         <h3>修改成功！！！！</h3>
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
           /* title:'',
           content:'',
          //  以数组保存选中的分类
           catagories:[],
          //  保存选中的作者
           author:'', */
          },
          id:this.$route.query.id,
         s:false,
        //  authors:["xile","haokana","changan"]
      }
    },
    methods: {
    //将这条blog请求过来
    fetchblog(){
        this.$http.get("https://blogs-69dd3-default-rtdb.firebaseio.com/posts/"+this.id+".json",this.id) .then(res=>{
            this.blog=res.body
            console.log(this.blog);
        })

    } ,
      post(){
        this.$http.put("https://blogs-69dd3-default-rtdb.firebaseio.com/posts/"+this.id+".json",this.blog).then((data)=>{
          console.log(data);
          this.s=true;
        })
  
      }
    },
    created() {
        this.fetchblog()
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
  