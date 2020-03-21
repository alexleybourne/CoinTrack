<template>
  <div class="home" :class="{blackBG: DarkMode}">
    <div class="center">
      <h1 @click="colorSwitch" :class="{ whiteText: DarkMode }">Hi I'm Alex</h1>
    </div>
    <br>
    <div class="socialLinks">
      <a href="https://twitter.com/AlexLeybourne" target="_blank" class="socialSection">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/twitter.svg" alt="Twitter Logo">
        <h1 :class="{ whiteText: DarkMode }"> <DaysOfCode/>+ </h1>
        <p :class="{ whiteText: DarkMode }"> #100DaysOfCode</p>
      </a>
      <a href="https://github.com/alexleybourne" target="_blank" class="socialSection">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/github-logo.svg" alt="Github Logo">
        <h1 :class="{ whiteText: DarkMode }"> <Commits/> Commits</h1>
        <p :class="{ whiteText: DarkMode }"> this year and counting.</p>
      </a>
      <a href="https://www.linkedin.com/in/alexleybourne/" target="_blank" class="socialSection">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/linkedin.svg" alt="Linkedin Logo">
        <h1 :class="{ whiteText: DarkMode }"> Lets Connect </h1>
        <p :class="{ whiteText: DarkMode }"> Come say hello. </p>
      </a>
    </div>
    <div class="bg" :class="{blackBG: DarkMode}"></div>
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
      DarkMode: false,
    }
  },
  methods: {
    colorSwitch() {
      this.DarkMode ? this.DarkMode = false : this.DarkMode = true
    }
  }
}
</script>

<style>

* {
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;
}

a { 
  color: inherit; 
  text-decoration:none; 
} 
  
.home {
  background-size: fill;
}

.center {
  display: flex;
  justify-content: center;
  margin-top: 30vh;
}

.center h1 {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: Bold;
  font-size: 100px;
}

.whiteText {
  color: white;
}

.blackBG {
  background-color: black;
}

.invert {
  filter: invert(1)
}

.bg {
  position: absolute;
  z-index: -1;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
}

.socialLinks {
  display: flex;
  justify-content: space-around;
}

.socialSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.socialSection h1 {
  margin: 4px 0 0 0;
  font-size: 20px;
}

.socialSection p {
  margin: 0;
  font-size: 12px;
}

.socialIcon {
  width: 60px;
  height: auto;
}

</style>
