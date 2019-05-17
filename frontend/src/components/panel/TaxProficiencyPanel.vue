<template>
    <div class="panel col">
        <div class="row">
            <form-title class="col justify-content-center d-flex">
            How comfortable do you feel about taxes?
            </form-title>
        </div>

        <div class="row">
            <div class="col-md-6 col-lg-4 p-1 d-flex justify-content-center">
            <form-option :icon="$resource('icons.svg')+'#beginner'" :selected_option.sync="selected_option" :label="'Beginner'"></form-option>
            </div>
            <div class="col-md-6 col-lg-4 p-1 d-flex justify-content-center">
            <form-option :icon="$resource('icons.svg')+'#intermediate'" :selected_option.sync="selected_option" :label="'Intermediate'"></form-option>
            </div>
            <div class="col-md-6 col-lg-4 p-1 d-flex justify-content-center">
            <form-option :icon="$resource('icons.svg')+'#expert'" :selected_option.sync="selected_option" :label="'Expert'"></form-option>
            </div>
        </div>
    </div>
</template>

<script>

    import FormTitle from '../form/FormTitle';
    import FormOption from "../form/FormOption";
    import {panel_mixin} from "../../mixin";

    export default {
        name: "tax-proficiency-panel",
        mixins:[panel_mixin],
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
        created(){

        },
        components: {FormOption, FormTitle}
    }
</script>

<style scoped lang="scss">
    .panel{
        user-select:none;

    }
</style>