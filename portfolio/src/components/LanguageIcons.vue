<template>
        <div class="languageIcons">
          <div class="languageIconSpacer" v-for="icon in icons" :key="icon.title" >
            <div class="languageIconHolder tooltip" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
              <img :src="require('@/assets/icons/languages/' + icon.file)" :alt="icon.title" class="languageIcon" :class="[{ invert: DarkMode }, icon.animation ? icon.animation : 'spin']">
              <span class="tooltiptext" :class="{ invert: DarkMode }" >{{icon.title}}</span>
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
                {title: 'Vue', file: 'VueJsLogo.svg' },
                {title: 'React', file: 'ReactLogo.svg', animation: 'react'},
                {title: 'Javascript', file: 'JavascriptLogo.svg', animation: 'jello'},
                {title: 'Node Js', file: 'NodeJsLogo.svg'},
                {title: 'Ruby', file: 'RubyLogo.svg'},
                {title: 'Rails', file: 'RubyOnRailsLogo.svg'},
                {title: 'HTML', file: 'Html5Logo.svg'},
                {title: 'CSS', file: 'CSS3Logo.svg'},
                {title: 'Sass', file: 'SassLogo.svg'},
                {title: 'Firebase', file: 'FireBaseLogo.svg'},
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