<template>
  <div class="">
   <h2>axios练习</h2>
   <button @click='getuserdata()'>获取</button>
   <p v-for="item in userdata">{{item.url}}</p>
  </div>
</template>

<script>
  import axios from 'axios'
  
export default {
  name: "",
  data() {
    return {
        userdata:''
    }
  },
  components: {

  },
  methods: {
    getuserdata(){
      let that=this
      axios.get("http://gocloudcoder.com:8082/api/v1/search?name=周").then(function(response){
         that.userdata=response.data.data;
      })
       
    }
  },
}
</script>

<style scoped>

</style>
