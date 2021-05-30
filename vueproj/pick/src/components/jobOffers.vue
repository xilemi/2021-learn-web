<template>
  <el-scrollbar style="height: 100%;">
    <div class="job">
      <ul>
        <!-- v-for显示多条 -->
        <li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li><li class="job-item" @click='details()'>
          <div class="contain">
          <p>招聘职位:hfkasdf</p>
          <p>薪资:skdjfhsdhf</p>
          <p>工作城市:askjddhf</p>
          <p>工作待遇:kgjsdhfkhsdakfhasdkodfkjgkhsdkghdsfkgkdfhgkhkjdsjkdhfkshdafkjhsakfhdskfjhsadkj</p>
          </div>
        </li>
        
      </ul>
    </div>
  </el-scrollbar>
</template>

<script>
export default {
  name: "",
  data() {
    return {

    }
  },
  methods: {
    details(){
      this.$router.push("/offerDetails")
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
.contain{
  width: 1440px;
  margin: 0 auto;
}
.contain p:not(.last){
  height: 100px;
  width: 200px;
  float: left;
  display: block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.contain p:nth-child(4){
  width: 400px;
}
.job>ul li{
  height: 100px;
}
.job>ul li:nth-child(odd){
  background-color: #f5f5f5;
}
.job>ul li:nth-child(even){
  background-color: #5F5F5F;
}
</style>
