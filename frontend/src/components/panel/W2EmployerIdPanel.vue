<template>
    <div class="panel col">
        <div class="row ">
            <h4 class="col">Let's start with some info from this W-2</h4>
        </div>
        <div class="row">
            <h5 class="col">This info helps us pick the easiest way to add your W-2 to your return</h5>
        </div>
        <div class="row mt-3">
            <form-input class="col-auto" label="Employer ID Number (EIN) or Federal ID" v-model="employer_id"></form-input>
        </div>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";
    import FormInput from "../form/FormInput";

    export default {
        name: "w2-employer-id-panel",
        components: {FormInput},
        data(){
            return{
                employer_id:''
            }
        },
        computed:{
            is_completed(){
                return this.employer_id != '';
            }
        },
        mixins:[panel_mixin]
    }
</script>

<style scoped>

</style>