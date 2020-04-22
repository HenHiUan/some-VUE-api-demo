<template>
  <div class="home">
   <Mine :fData="transmitData"/>
  </div>
</template>

<script>
import Mine from '../components/MineComponents/Mine'
export default {
  name: 'home',
  components: {
    Mine
  },
  data () {
    return {
      transmitData:{
          title:'Xuan',
          uuid:'hins'
      }
    }
  }
}
</script>

<style scoped>
.home{
  height: 100%;
}
</style>


