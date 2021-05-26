<template>
  <div class="">
        <div class="title">
          <img src="" alt="">
          <span>企业名字{{this.$route.query.searchData}}</span>
          <span>浏览次数</span>
          <button>关注</button>
        </div>
        <p>宣传视频</p>
        <p>企业特点</p>
        <p>公司简介</p>
        <p>公司文化</p>
        <p>公司愿景</p>
        <p>公司架构</p>
        <p>产品/服务介绍</p>
        <p>工商信息</p>
        <p>公司地址</p>
        <p>荣誉墙</p>
        <p>风采展</p>
        <p>提升机制</p>
        <p>实训生名额及内容</p>
        <p>联系方式</p>
  </div>
</template>

<script>
export default {
  name: "businessCard",
  data() {
    return {
      inputModel:'',
      businessmsg:[
        {
          name:'百度'
        },
        {
          name:'谷歌'
        }
      ]
    }
  },
  methods: {
     
  },
  components: {

  }
}
</script>

<style scoped>

</style>
