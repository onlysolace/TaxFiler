<template>
    <div class="panel mr-auto ml-auto text-center">
        <h4>Nice! We'll help you maximize your tax returns</h4>
        <h5 class="mb-5">But first, tell us more about you</h5>
        <svg>
            <use :xlink:href="$resource('icons.svg')+'#astronaut'"></use>
        </svg>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";

    export default {
        name: "personal-information-intro-panel",
        mixins:[panel_mixin],
        data(){
            return{

            }
        },
        computed:{
            is_completed(){
                return true;
            }
        }
    }
</script>

<style scoped>

</style>