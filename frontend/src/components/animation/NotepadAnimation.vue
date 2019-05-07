<template>
    <div class="shapeshifter play" :style="{'background-image' : 'url(' + require('../../assets/notepad.svg') + ')'}"></div>
</template>

<script>
    export default {
        name: "notepad-animation"
    }
</script>

<style scoped>
    @keyframes play18 {
        0% {
            background-position: 0px 0px;
        }
        100% {
            background-position: -5400px 0px;
        }
    }
    .shapeshifter {
        animation-duration: 1200ms;
        animation-timing-function: steps(18);
        height:300px;
        width:300px;
        background-repeat: no-repeat;
        animation-iteration-count: infinite;
        -moz-animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        -o-animation-iteration-count: infinite;


    }
    .shapeshifter.play {
        animation-name: play18;
    }
</style>