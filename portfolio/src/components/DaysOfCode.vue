<template>
        <span>{{ animatedNumber }}</span>
</template>

<script>
export default {
    name: 'DaysOfCode',
    data() {
        return {
            number: 200,
            tweenedNumber: 0
        }
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    mounted(){
        setTimeout(() => {  gsap.to(this.$data, { duration: 0.5, tweenedNumber: this.number }) }, 100)
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