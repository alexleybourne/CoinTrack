<template>
  <IOdometer
    class="iOdometer"
    :value="num"
  />
</template>


<script>
import IOdometer from 'vue-odometer';
  import 'odometer/themes/odometer-theme-default.css';
 
  export default {
    name: 'HelloWorld',
    components: {
      IOdometer
    },
    data() {
      return {
        num: 999999
      };
    },
    mounted() {
      const that = this;
      setInterval(function() {
        that.num += 1;
      }, 2000);
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .iOdometer {
    font-size: 2em;
    margin: 0;
  }
</style>
