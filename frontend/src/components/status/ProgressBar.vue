<template>
    <div class="progress-bar" :style="{width:progress_percentage}">
        <div class="bar"></div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "progress-bar",
        mounted(){
            if(this.$root.theme == 'bootstrap'){
                this.$el.classList.add('progress');
            }
        },
        computed:{
            ...mapState(['active_panel_index','panels']),
            progress_percentage(){
                return Math.trunc((this.active_panel_index + 1)/this.panels.length * 100)+'%';
            }
        }
    }
</script>

<style scoped>
    .progress-bar{
        height:10px;
        z-index:1000;
    }

</style>