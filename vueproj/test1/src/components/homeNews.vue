<template>
  <div class="news">
      <ul>
          <li>新闻1</li>
          <li>新闻2</li>
          <li>新闻3</li>
          <li>新闻4</li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "homeNews",
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped>
    .news{
        font-size: 30px;
        background-color: aquamarine;
    }
    .news>ul>li{
        list-style: none;
    }
</style>
