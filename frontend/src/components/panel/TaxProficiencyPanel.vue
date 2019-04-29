<template>
    <div class="panel col">
        <div class="row">
            <form-title class="col justify-content-center d-flex">
            How comfortable are you with taxes?
            </form-title>
        </div>

        <div class="row">
            <form-option :icon="$resource('icons.svg')+'#beginner'" class="col-md-6 col-lg-4 p-1" :selected_option.sync="selected_option" :label="'Beginner'"></form-option>
            <form-option :icon="$resource('icons.svg')+'#intermediate'" class="col-md-6 col-lg-4 p-1" :selected_option.sync="selected_option" :label="'Intermediate'"></form-option>
            <form-option :icon="$resource('icons.svg')+'#expert'" class="col-md-6 col-lg-4 p-1" :selected_option.sync="selected_option" :label="'Expert'"></form-option>
        </div>
    </div>
</template>

<script>
    import FormTitle from '../form/FormTitle'
    import FormOption from "../form/FormOption";
    export default {
        name: "tax-proficiency-panel",
        data(){
            return{
                selected_option:null
            }
        },
        components: {FormOption, FormTitle}
    }
</script>

<style scoped lang="scss">

</style>