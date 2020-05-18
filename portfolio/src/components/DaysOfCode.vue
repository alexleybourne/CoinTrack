<template>
        <span>{{ animatedNumber }}</span>
</template>

<script>
export default {
    name: 'DaysOfCode',
    data() {
        return {
            number: 250,
            tweenedNumber: 100
        }
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    mounted(){
        setTimeout(() => {  gsap.to(this.$data, { duration: 0.5, tweenedNumber: this.number }) }, 800)
    },
    methods: {

        
    },
}
</script>

<style scoped>

    span {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 24px;
    }

</style>