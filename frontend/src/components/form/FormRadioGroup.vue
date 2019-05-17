<template>
    <div class="form-radio-group">
        <form-radio-button :group="group" v-for="value in values" :value="value" class="mb-2 ml-3" @selection="update_selection" :key="value"></form-radio-button>
    </div>
</template>

<script>
    import FormRadioButton from './FormRadioButton'
    export default {
        name: "form-radio-group",
        components:{FormRadioButton},
        props:{
            group: String,
            values: Array,
            selected_option: String
        },
        methods:{
            update_selection(value){
                this.$emit('update:selected_option', value);
            }
        }
    }
</script>

<style scoped>

</style>