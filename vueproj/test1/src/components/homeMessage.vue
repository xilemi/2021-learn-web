<template>
  <div class="message">
      <ul>
          <li class="first">信息1</li>
          <li>信息2</li>
          <li>信息3</li>
          <li>信息4</li>
      </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "homeMessage",
  components: {

  },
}
</script>

<style scoped>
  .message{
      font-size: 20px;
      background-color: blanchedalmond;
  }
  .message>ul>li{
      list-style: none;
  }
</style>
