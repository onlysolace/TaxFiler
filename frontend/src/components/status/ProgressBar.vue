<template>
    <div class="progress-bar" :style="{width:progress_percentage}">
        <div class="bar"></div>
    </div>
</template>

<script>
    import {mapState, mapGetters} from 'vuex'
    export default {
        name: "progress-bar",
        mounted(){
            if(this.$root.theme == 'bootstrap'){
                this.$el.classList.add('progress');
            }
        },
        computed:{
            ...mapState(['active_panel_index']),
            ...mapGetters(['active_panels']),
            progress_percentage(){
                return Math.trunc((this.active_panel_index + 1)/this.active_panels.length * 100)+'%';
            }
        }
    }
</script>

<style scoped lang="scss">
    .progress-bar{
        height:10px;
        z-index:1000;

        &.blue{
            background-color:#227dae;
        }
    }

</style>