<template>
<div class="bg" :class="{blackBG: DarkMode, whiteBG: !DarkMode}">
  <div class="home">
    <div @click="ColorSwitch" class="darkModeButton" :class="{ whiteCardNS: !DarkMode, blackCardNS: DarkMode }">
      <img :class="{ invertButton: DarkMode }" src="@/assets/icons/DarkMode.svg" alt="Dark Mode Toggle">
    </div>
    <div class="center">
      <div class="mainCard" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img src="@/assets/images/ProfileImage.jpg" alt="Profile Picture" class="profileImage" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <h1 :class="{ whiteText: DarkMode }">Hi I'm Alex</h1>
      </div>
    </div>
    <br>
    <div class="socialLinks">
      <a href="https://twitter.com/AlexLeybourne" target="_blank" class="socialSection" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/twitter.svg" alt="Twitter Logo">
        <h1 :class="{ whiteText: DarkMode }"> <DaysOfCode/>+ </h1>
        <p :class="{ whiteText: DarkMode }"> #100DaysOfCode</p>
      </a>
      <a href="https://github.com/alexleybourne" target="_blank" class="socialSection" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/github-logo.svg" alt="Github Logo">
        <h1 :class="{ whiteText: DarkMode }"> <Commits/>+ Commits</h1>
        <p :class="{ whiteText: DarkMode }"> this year and counting.</p>
      </a>
      <a href="https://www.linkedin.com/in/alexleybourne/" target="_blank" class="socialSection" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/linkedin.svg" alt="Linkedin Logo">
        <h1 :class="{ whiteText: DarkMode }"> Lets Connect </h1>
        <p :class="{ whiteText: DarkMode }"> Come say hello. </p>
      </a>
    </div>
  </div>
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
    ColorSwitch() {
      this.DarkMode ? this.DarkMode = false : this.DarkMode = true
    },
    TimeOfDay(){
      var d = new Date()
      var n = d.getHours()
      if ( n > 5 && n < 18 ) {
        this.DarkMode = false
      } else {
        this.DarkMode = true
      }
    }
  },
  mounted() {
    this.TimeOfDay()
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

.darkModeButton {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 40px;
  right: 40px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  transition-duration: 0.5s;
}

.darkModeButton:hover {
  transform: scale(1.1);
}

.darkModeButton img {
  height: auto;
  width: 40px;
  transition-duration: 0.5s;
  cursor: pointer;
}

.mainCard {
  width: 50vw;
  height: 50vh;
  border-radius: 50px;
}
  
.home {
  background-size: fill;
}

.profileImage {
  height: auto;
  width: 200px;
  border-radius: 100%;
  margin-top: 50px;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
}

.center h1 {
  font-size: 80px;
  cursor: default;
}

.whiteText {
  color: white;
}

.blackBG {
  background-color: #161A1E;
  transition-duration: 0.2s;
}

.whiteBG {
  background-color: #ffff;
  transition-duration: 0.2s;
}

.invert {
  filter: invert(1)
}

.invertButton {
  transform: rotate(180deg);
  filter: invert(1)
}

.bg {
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
}

.socialLinks {
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}

.socialSection {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 200px;
  width: 200px;
  border-radius: 50px;
  transition-duration: 0.2s;
}

.whiteCard {
  background: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9, 
             -20px -20px 60px #ffffff;
}

.blackCard {
  background: #161A1E;
  box-shadow:  20px 20px 28px #14171b, 
              -20px -20px 28px #181d21;
}

.whiteCardNS {
  background: #ffffff;
  box-shadow:  20px 20px 60px #d9d9d9, 
             -20px -20px 60px #ffffff;
}

.blackCardNS {
  background: linear-gradient(145deg, #14171b, #181c20);
}

.socialSection:hover {
  transform: scale(1.05);
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
  width: 70px;
  height: auto;
}

@media only screen and (max-width: 700px) {
  .socialLinks {
    flex-direction: column;
    align-items: center;
    margin: 50px;
  }

  .socialSection {
  margin: 30px;
  }

  .bg {
    height: auto;
  }

  .mainCard {
    width: 90vw;
    height: 70vh;
    min-height: 600px;
    border-radius: 50px;
  }

  .darkModeButton {
    position: fixed;
    top: unset;
    bottom: 20px;
    right: 20px;
  }
}

</style>
