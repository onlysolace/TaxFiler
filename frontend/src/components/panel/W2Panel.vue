<template>
    <div class="panel col">
        <div class="row">
            <h6 class="col">Income & Taxes Withheld</h6>
        </div>
        <div class="row">
            <form-input class="col-md-6 mt-2" label="Wages, tips, other" v-model="income"></form-input>
            <form-input class="col-md-6 mt-2" label="Federal Tax Withheld"></form-input>
            <form-input class="col-md-6 mt-2" label="Social Sec. Wages"></form-input>
            <form-input class="col-md-6 mt-2" label="Social Sec. Tax Withheld"></form-input>
            <form-input class="col-md-6 mt-2" label="Medicare Wages"></form-input>
            <form-input class="col-md-6 mt-2" label="Medicare Tax Withheld"></form-input>
        </div>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";
    import FormInput from "../form/FormInput";

    export default {
        name: "w2-panel",
        components: {FormInput},
        computed:{
            income:{
                get(){
                    return this.$store.state.income;
                },
                set(value){
                    this.$store.commit('set_income', value);
                }
            },
            is_completed(){
                return this.income;
            }
        },
        mixins:[panel_mixin]
    }
</script>

<style scoped>

</style>