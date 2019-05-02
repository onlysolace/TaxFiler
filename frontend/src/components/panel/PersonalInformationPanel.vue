<template>
    <div class="panel pl-3 pr-3">
        <h4>Let's start by getting to know you</h4>
        <h5>We just need a few personal details...</h5>

        <div class="row no-gutters mt-3">
            <form-input label="First Name" class="p-1 col-lg-4 col-md-6"></form-input>
            <form-input label="Last Name" class="p-1 col-lg-4 col-md-6"></form-input>
            <form-input label="Middle Name" class="p-1 col-lg-4 col-md-6"></form-input>
        </div>
        <div class="row no-gutters mt-3">
            <form-input label="Date of Birth" class="p-1"></form-input>
        </div>
        <div class="row no-gutters mt-3">
            <form-input label="SSN" class="p-1" v-model="ssn"></form-input>
        </div>
        <transition name="slide-up">
            <div v-if="ssn_not_found" key="1" class="row no-gutters mt-3">
                <p class="mb-3 ml-0 alert col-auto p-2" :class="{'alert-warning':$root.theme == 'bootstrap'}">
                    Your social security number was not found within our records. Please check again
                </p>
            </div>
            <div v-else-if="file_locked" key="2" class="row no-gutters mt-3">
                <p class="mb-3 ml-0 mr-3 alert col-auto p-2" :class="{'alert-warning':$root.theme == 'bootstrap'}">
                    You currently have a file-lock in place. Unlock your account to proceed
                </p>
                <form-button type="warning" class="mb-3 col-auto p-2">unlock my account</form-button>
            </div>
            <div v-else-if="has_filed" key="3" class="row no-gutters mt-3">
                <p class="mb-3 ml-0 mr-3 alert col-auto p-2" :class="{'alert-info':$root.theme == 'bootstrap'}">
                    It appears that you have already filed a tax return this year
                </p>
                <form-button type="info" class="mb-3 col-auto p-2">view my return</form-button>
            </div>
        </transition>

    </div>
</template>

<script>
    import FormInput from "../form/FormInput";
    import {panel_mixin} from "../../mixin";
    import FormButton from "../form/FormButton";

    const axios = require('axios');

    export default {
        name: "personal-information-panel",
        components: {FormButton, FormInput},
        mixins: [panel_mixin],
        data() {
            return {
                has_filed: false,
                file_locked: false,
                ssn_not_found: false
            }
        },
        computed: {
            is_completed() {
                return !this.has_filed;
            },
            ssn: {
                get() {
                    return this.$store.state.ssn;
                },
                set(value) {
                    this.has_filed = false;
                    this.file_locked = false;
                    this.ssn_not_found = false;
                    this.$store.commit('set_ssn', value);
                }
            }
        },
        watch: {
            ssn(nv, ov) {
                console.log('watching running');
                axios.post('http://localhost:8080/account/taxstatus/query', {ssn: nv}).then(response => {
                    console.log(response);
                    this.file_locked = response.data.tax_status.fileLocked;
                    this.has_filed = response.data.has_filed;
                }).catch(error => {
                    this.ssn_not_found = true;
                });
            }
        }
    }
</script>

<style scoped>
    .panel {
        height: 100%;
        width: 100%;

    }
    h4, h5{
       user-select:none;
    }
</style>