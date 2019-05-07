<template>
    <div class="panel col">
        <h5>Just a placeholder panel</h5>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";

    export default {
        name: "placeholder-panel",
        mixins:[panel_mixin],
        computed:{
            is_completed(){
                return true;
            }
        }
    }
</script>

<style scoped>
    .panel{
        user-select:none;
    }
</style>