<template>
  <div class="">
   <div class="main">
       <span>职位</span>
       <span>月薪</span>
       <button>收藏</button>
   </div>
   <div class="details">
       <p>职位描述:</p>
       <p>
        1.一份简单，有条理，简短的书面陈述，包括一份工作的所有基本要求的清单，
        <br>
        2.以及一份由工作负责人执行的职责和责任的摘要，被称为工作描述。
        <br>
        3.它是作业分析的直接和主要输出。 简而言之，它是一个语句，它包含与特定工作有关的所有相关事实。
       </p>
   </div>
   <div class="other">
    <p>福利待遇:</p>
    <p>提示机制:</p>
    <p>工作地点:</p>
   </div>
   
  </div>
</template>

<script>
export default {
  name: "offerDetails",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.main{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 25px;
    
}
.main span:nth-child(1){
    margin-right: 100px;
}
.main>button{
    font-size: 25px;
    float: right;
    margin-right: 100px;
}
.details{
    width: 95%;
    height: 300px;
    background-color: #5F5F5F;
    margin: 0 auto;
    color: #fff;
}
.details p:nth-child(1){
    font-size: 25px;
    padding-left: 20px;
}
.details p:nth-child(2){
    font-size: 18px;
    padding-left: 120px;
}
.other p{
  width: 95%;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 25px;
  background-color: #5f5f5f;
  margin: 20px auto;
  padding-left: 20px;
  box-sizing: border-box;
  
}
</style>
