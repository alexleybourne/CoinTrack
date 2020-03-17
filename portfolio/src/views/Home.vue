<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div>
      <div data-tilt data-tilt-full-page-listening>
        <img src="https://static.wixstatic.com/media/2cd43b_5f099d303fb742dfb10d3892386e0eb6~mv2.png/v1/fill/w_320,h_322,fp_0.50_0.50/2cd43b_5f099d303fb742dfb10d3892386e0eb6~mv2.png" alt="meow">
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
