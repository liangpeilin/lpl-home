<template>
  <div id="app">
    <router-view name="Home"></router-view>
    <router-view name="Second"></router-view>
    <router-view name="Third"></router-view>
    <router-view name="Thour"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body{
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;//CSS3中用于webkit引擎(如chrome)中设置字体的抗锯齿或者说光滑度的属性。
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
