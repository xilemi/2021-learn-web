<template>
  <div class="job">
    <ul>
      <!-- v-for显示多条 -->
      <li class="job-item">
        <span>招聘职位</span>
        <span>工作地点</span>
        <span>工作薪资</span>
        <span>职位要求</span>
      </li>
      <li class="job-item">
        <span>招聘职位</span>
        <span>工作地点</span>
        <span>工作薪资</span>
        <span>职位要求</span>
      </li>
      <li class="job-item">
        <span>招聘职位</span>
        <span>工作地点</span>
        <span>工作薪资</span>
        <span>职位要求</span>
      </li>
      <li class="job-item">
        <span>招聘职位</span>
        <span>工作地点</span>
        <span>工作薪资</span>
        <span>职位要求</span>
      </li>
      
    </ul>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
.job-item{
width: 100%;
height: 100px;
line-height: 100px;
margin: 0 auto;
background-color: #f5f5f5;
}
.job-item span{
  text-align: left;
  margin-left: 250px;
}
.job>ul li{
  height: 100px;
}
.job>ul li:nth-child(odd){
  background-color: #f5f5f5;
}
.job>ul li:nth-child(even){
  background-color: #2E302F;
}
</style>
