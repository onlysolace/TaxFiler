<template>
    <div class="panel col">
        <h5>How did you do your taxes last year?</h5>
        <div class="row d-flex justify-content-center">

            <div class="col-auto no-gutters mt-3">
                <form-option animate :icon="$resource('icons.svg') + '#space'" label="Yosemite Tax Service" :selected_option.sync="selected_option"></form-option>
            </div>
            <div class="col-auto no-gutters mt-3">
            <form-option animate :icon="$resource('icons.svg') + '#computer'" label="Other Tax Software" :selected_option.sync="selected_option"></form-option>
            </div>
            <div class="col-auto no-gutters mt-3">
                <form-option animate :icon="$resource('icons.svg') + '#suitcase'" label="Tax Professional" :selected_option.sync="selected_option"></form-option>
            </div>
            <div class="col-auto no-gutters mt-3">
                <form-option animate :icon="$resource('icons.svg') + '#store'" label="Tax Service" :selected_option.sync="selected_option"></form-option>
            </div>
            <div class="col-auto no-gutters mt-3" >
                <form-option animate :icon="$resource('icons.svg') + '#error'" label="Didn't file taxes last year" :selected_option.sync="selected_option"></form-option>
            </div>
            <div class="col-auto no-gutters mt-3">
                <form-option animate :icon="$resource('icons.svg') + '#question'" label="Other" :selected_option.sync="selected_option"></form-option>
            </div>

        </div>


    </div>
</template>

<script>
    import FormOption from "../form/FormOption";
    import CheckmarkAnimation from "../animation/CheckmarkAnimation";
    import {panel_mixin} from "../../mixin";

    export default {
        name: "last-year-tax-method-panel",
        mixins:[panel_mixin],
        data(){
            return {
                selected_option: null
            }
        },
        computed:{
            is_completed(){
                return this.selected_option != null;
            }
        },
        components: {CheckmarkAnimation, FormOption}
    }
</script>

<style scoped>
    .panel{
        user-select:none;
    }
</style>