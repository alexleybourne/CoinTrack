<template>
<div class="bg" :class="{blackBG: DarkMode, whiteBG: !DarkMode}">
  <div v-if="!HideLoadingScreen" class="loading" :class="{visible: !PageLoaded, hidden: PageLoaded}" >
    <img src="@/assets/loading.gif" alt="tetris loading gif">
    <p>LOADING</p>
  </div>
  <div class="home">
    <div @click="ColorSwitch" class="darkModeButton" :class="{ whiteCardNS: !DarkMode, blackCardNS: DarkMode }">
      <img :class="{ invertButton: DarkMode }" src="@/assets/icons/DarkMode.svg" alt="Dark Mode Toggle">
    </div>
    <div class="center">
      <div class="mainCard" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img src="@/assets/images/ProfileImage.jpg" alt="Profile Picture" class="profileImage" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <h1 :class="{ whiteText: DarkMode }">Hi I'm Alex</h1>
        <p :class="{ whiteText: DarkMode }">I'm a young creative-minded Developer.</p>

        <div class="languageIcons">
          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/VueJsLogo.svg" alt="Vue Logo" class="languageIcon" :class="{ invert: DarkMode }" style="transform: translateY(7px)">
          </div>
        
          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/ReactLogo.svg" alt="React Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/JavascriptLogo.svg" alt="Javascript Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/NodeJsLogo.svg" alt="Node Js Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/RubyLogo.svg" alt="Ruby Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/Html5Logo.svg" alt="Html Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/CSS3Logo.svg" alt="Css Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/SassLogo.svg" alt="Sass Logo" class="languageIcon" :class="{ invert: DarkMode }">
          </div>

          <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/FireBaseLogo.svg" alt="Firebase Logo" class="languageIcon" :class="{ invert: DarkMode }">
            <span class="tooltiptext">Firebase</span>
          </div>

          <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
            <img src="@/assets/icons/languages/FireBaseLogo.svg" alt="Firebase Logo" class="languageIcon" :class="{ invert: DarkMode }">
            <span class="tooltiptext">Firebase</span>
          </div>
        </div>
       
      </div>
    </div>
    <Socials :DarkMode="DarkMode" />
  </div>
</div>
</template>

<script>

const Socials = () => import("@/components/Socials.vue");
export default {
  name: 'Home',
  components: {
    Socials,
  },
  data() {
    return {
      DarkMode: false,
      PageLoaded: false,
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
    },
    Loaded(){
      window.addEventListener('load', (event) => {
        console.log('page is fully loaded')
        setTimeout(this.PageLoaded = true , 10000)
      })
    },
  },
  mounted() {
    this.TimeOfDay()
    this.Loaded()
  },
}
</script>

<style>
  @import '../styles.css';
</style>


