<template>
    <div class="panel col">
        <div class="row no-gutters">
            <h5>Let's get your W2 info</h5>
        </div>
        <div class="row no-gutters">
            <h6>If you have more than one W2, we'll go through them one at a time. If you have any 1099s, we'll get to
                those later</h6>
        </div>
        <div class="row">
            <div class="col d-flex flex-column mt-2">
              <form-radio-group group="w2" :values="['Work on my W-2 now','I don\'t have any W-2s','Skip W-2s for now']" :selected_option.sync="selected_option"></form-radio-group>
            </div>
        </div>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";
    import FormRadioGroup from "../form/FormRadioGroup";

    export default {
        name: "w2-confirmation-panel",
        components: {FormRadioGroup},
        data(){
            return{
                selected_option:null
            }
        },
        computed:{
            is_completed(){
                return this.selected_option != null;
            }
        },
        mixins: [panel_mixin]
    }
</script>

<style scoped>

</style>