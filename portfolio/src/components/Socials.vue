<template>
    <div class="socialLinks">
      <a href="https://twitter.com/AlexLeybourne" target="_blank" class="socialSection" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/twitter.svg" alt="Twitter Logo">
        <div class="socialText">
          <h1 :class="{ whiteText: DarkMode }"> <DaysOfCode/>+ </h1>
          <p :class="{ whiteText: DarkMode }"> #100DaysOfCode</p>
        </div>
      </a>
      <a href="https://github.com/alexleybourne" target="_blank" class="socialSection" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
          <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/github-logo.svg" alt="Github Logo">
        <div class="socialText">
          <h1 :class="{ whiteText: DarkMode }"> <Commits/>+ Commits</h1>
          <p :class="{ whiteText: DarkMode }"> in a year and counting.</p>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/alexleybourne/" target="_blank" class="socialSection" :class="{ whiteCard: !DarkMode, blackCard: DarkMode }">
        <img class="socialIcon" :class="{ invert: DarkMode }" src="@/assets/icons/linkedin.svg" alt="Linkedin Logo">
        <div class="socialText">
          <h1 :class="{ whiteText: DarkMode }"> Lets Connect </h1>
          <p :class="{ whiteText: DarkMode }"> Come say hello. </p>
        </div>
      </a>
    </div>
</template>

<script>
const Commits = () => import("@/components/Commits.vue");
const DaysOfCode = () => import("@/components/DaysOfCode.vue");
export default {
    name: 'Socials',
    components: {
        Commits,
        DaysOfCode,
    },
    props: {
        DarkMode: Boolean,
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    methods: {

    },
}
</script>

<style>
  @import '../styles.css';
</style>