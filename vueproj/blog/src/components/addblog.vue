<template>
  <div class="addblog">
     <h2>写博客</h2>
     <form>
      <label>标题:</label>
      <input type="text" v-model="blog.title">
      <label>内容:</label>
      <textarea v-model="blog.content"></textarea>
      <label>分类:</label>
      <div class="checkbox" >
        <ul>
          <li><input type="checkbox" value="vue.js" v-model="blog.catagories">vue.js</li>
          <li><input type="checkbox" value="node.js" v-model="blog.catagories">node.js</li>
          <li><input type="checkbox" value="react.js" v-model="blog.catagories">react.js</li>
          <li><input type="checkbox" value="angular.js" v-model="blog.catagories">angular.js</li>
        </ul>
      </div>
      <label>作者</label>
      <select v-model="blog.author" >
        <option v-for="author in authors">{{author}}</option>
      </select>
     </form>
     <hr>
     <div id="preview">
       <h3>博客总览</h3>
       <p>标题</p>
       <p>{{blog.title}}</p>
       <p>内容</p>
       <p>{{blog.content}}</p>
       <p>分类</p>
       <p>
         <ul>
           <!-- 读取分类 -->
         <li v-for="catagory in blog.catagories">{{catagory}}</li>
       </ul>
      </p>
      <p>作者</p>
       <p>{{blog.author}}</p>
     </div>
     <button>提交</button>
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
         author:''
       },
       authors:["111","2222","xile"]
    }
  },
  components: {

  }
}
</script>

<style scoped>

</style>
