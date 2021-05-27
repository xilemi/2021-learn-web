<template>
  <div class="">
   <h2>axios练习</h2>
   <button @click='getuserdata()'>获取</button>
   <p>{{userdata}}</p>
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
      axios({
        baseURL:'http://api.k780.com/?app=life.time&appkey=APPKEY&sign=SIGN&format=json&jsoncallback=data',
        timeout:5000,
      }).then(res=>{
        this.userdata=res;
      });
       
    }
  },
}
</script>

<style scoped>

</style>
