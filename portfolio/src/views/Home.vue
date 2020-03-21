<template>
  <div class="home" :class="{blackBG: !bcWhite}">
    <div class="center">
      <h1 @click="colorSwitch" :class="{ whiteText: !bcWhite }">Hello My Name is Alex</h1>
    </div>
    <p @click="colorSwitch" :class="{ whiteText: !bcWhite }"> Currently on <DaysOfCode/>+ Days of Code </p>
    <div class="bg" :class="{blackBG: !bcWhite}"></div>
  </div>
</template>

<script>
const Commits = () => import("@/components/Commits.vue");
const DaysOfCode = () => import("@/components/DaysOfCode.vue");
export default {
  name: 'Home',
  components: {
    Commits,
    DaysOfCode,
  },
  data() {
    return {
      bcWhite: true,
    }
  },
  methods: {
    colorSwitch() {
      this.bcWhite ? this.bcWhite = false : this.bcWhite = true
      console.log('The color is White? ' + this.bcWhite)
    }
  }
}
</script>

<style>

.home {
  background-size: fill;
}

.center {
  display: flex;
  justify-content: center;
  margin-top: 40vh;
}

.center h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: Bold;
  font-size: 40px;
}

p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: Bold;
  font-size: 24px;
  text-align: center;
}

.whiteText {
  color: white;
}

.blackBG {
  background-color: black;
}

.bg {
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
}

</style>
