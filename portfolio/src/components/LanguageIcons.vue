<template>
        <div class="languageIcons">
          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/VueJsLogo.svg" alt="Vue Logo" class="languageIcon jello" :class="{ invert: DarkMode }" style="transform: translateY(7px)">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Vue</span>
            </div>
          </div>
        
          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/ReactLogo.svg" alt="React Logo" class="languageIcon react" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >React</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/JavascriptLogo.svg" alt="Javascript Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Javascript</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/NodeJsLogo.svg" alt="Node Js Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Node Js</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/RubyLogo.svg" alt="Ruby Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Ruby</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/Html5Logo.svg" alt="Html Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Html</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/CSS3Logo.svg" alt="Css Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >CSS</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/SassLogo.svg" alt="Sass Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Sass</span>
            </div>
          </div>

          <div class="languageIconSpacer">
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img src="@/assets/icons/languages/FireBaseLogo.svg" alt="Firebase Logo" class="languageIcon jello" :class="{ invert: DarkMode }">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >Firebase</span>
            </div>
          </div>
        </div>
</template>

<script>
export default {
    name: 'LanguageIcons',
    data() {
        return {
            icons: [
                {title: 'Firebase', file: 'FireBaseLogo.svg', animation: 'jello'},



            ]
        }
    },
    props: {
        DarkMode: Boolean,
    },
    mounted(){
        
    },
    methods: {

        
    },
}
</script>

<style>
    @import '../styles.css';
</style>