<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
   name: 'app',
   components: {
     Header,
     Footer
   }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
ul li{
  list-style: none;
}
html,body{
  height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>
