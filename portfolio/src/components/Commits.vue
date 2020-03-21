<template>
    <span>{{ animatedNumber }}</span>
</template>

<script>
export default {
    name: 'Commits',
    data() {
        return {
            output: 0,
            tweenedNumber: 0,
            functionCalled: false,
        }
    },
    computed: {
        animatedNumber: function() {
            return this.tweenedNumber.toFixed(0);
        }
    },
    methods: {

        // Grabs commit number from github
        getGithubCommits(){
            let res = ''
            let slice = ''
            var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
             function doCORSRequest(options, printResult) {
                var x = new XMLHttpRequest();
                x.open(options.method, cors_api_url + options.url);
                x.onload = x.onerror = function() {
                printResult(
                    options.method + ' ' + options.url + '\n' +
                    x.status + ' ' + x.statusText + '\n\n' +
                    (x.responseText || '')
                );
                };
                if (/^POST/i.test(options.method)) {
                x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                }
                x.send(options.data);
            }
            doCORSRequest({
                method: 'GET',
                url: 'https://github.com/alexleybourne',
            }, function printResult(result) {
                // console.log('result recieved')
                let res = result
                let start = res.indexOf(`<h2 class="f4 text-normal mb-2">`) + 32
                let end = res.indexOf('in the last year')
                slice = res.slice(start, end)
                slice = slice.replace(/\D/g,'')
                slice = Number(slice)
                // console.log(slice)
                updateData()
            })

            const updateData = ()=>{
                this.functionCalled = true
                this.output = slice
                gsap.to(this.$data, { duration: 0.5, tweenedNumber: this.output })
            }
           
        },
    },
    mounted(){
        this.getGithubCommits()
    },
}
</script>