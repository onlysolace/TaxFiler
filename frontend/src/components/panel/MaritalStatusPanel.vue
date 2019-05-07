<template>
    <div class="panel pl-3 pr-3 w-100">
        <h5>Now let's talk a bit about your life</h5>
        <h6>What was your marital status on Dec. 31, 2018?</h6>
        <div class="row d-flex justify-content-center mt-3">
            <div class="col-auto no-gutters mt-3">
                <form-option :icon="$resource('icons.svg') + '#music'" :selected_option.sync="selected_option" label="Single" animate></form-option>
            </div>
            <div class="col-auto no-gutters mt-3">
            <form-option :icon="$resource('icons.svg') + '#rings'" :selected_option.sync="selected_option" label="Married" animate></form-option>
            </div>
            <div class="col-auto no-gutters mt-3">
                <form-option :icon="$resource('icons.svg') + '#other'" :selected_option.sync="selected_option" label="It's Complicated" animate></form-option>
            </div>
        </div>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";
    import FormOption from "../form/FormOption";

    export default {
        name: "marital-status-panel",
        components: {FormOption},
        data(){
            return{
                selected_option:null
            }
        },
        mixins:[panel_mixin],
        computed:{
            is_completed(){
                return this.selected_option != null;
            }
        }
    }
</script>

<style scoped>
    .panel{
        user-select:none;
    }
</style>