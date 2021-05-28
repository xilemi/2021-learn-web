<template>
  <div id="app">
    <router-link to="/search" class="tosearch"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import '../src/assets/css/reset.css'
</style>
