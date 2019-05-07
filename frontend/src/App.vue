<template>
    <div id="app" class="container">
        <transition :name="app_transition">
            <router-view :app_transition.sync="app_transition"></router-view>

        </transition>
    </div>
</template>

<script>
    import FileView from "./components/view/FileView";
    import {mapState} from 'vuex';
    export default {
        name: 'app',
        components: {
            FileView
        },
        data() {
            return{
                app_transition:'next-transition'
            }
        },
        methods:{

        },
        computed:{
            ...mapState(['active_panel_index'])
        }

    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    #app {
        display: flex;
        flex-direction: column;
    }
    hr{
        color:#BDBDBD;
    }
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .next-transition-enter-active, .prev-transition-enter-active, .slide-up-enter-active{
        transition: all .3s ease-in-out;
    }
    .next-transition-enter, .next-transition-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .prev-transition-enter, .prev-transition-leave-to{
        transform: translateX(-10px);
        opacity:0;
    }
    .slide-up-enter, .slide-up-leave-to{
        transform: translateY(10px);
        opacity:0;
    }

</style>
