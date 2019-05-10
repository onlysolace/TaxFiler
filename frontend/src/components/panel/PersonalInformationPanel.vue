<template>
    <div class="panel col">
        <h4>Let's start by getting to know you</h4>
        <h5>We just need a few personal details...</h5>

        <div class="row no-gutters mt-3">
            <form-input label="First Name" class="p-1 col-lg-4 col-md-6" v-model="first_name"></form-input>
            <form-input label="Last Name" class="p-1 col-lg-4 col-md-6" v-model="last_name"></form-input>
            <form-input label="Middle Name" class="p-1 col-lg-4 col-md-6" v-model="middle_name"></form-input>
        </div>
        <div class="row no-gutters mt-3">
            <form-input label="Date of Birth" class="p-1" v-model="date_of_birth"></form-input>
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
                <a type="warning" class="mb-3 col-auto p-2" href="/">unlock my account</a>
            </div>
            <div v-else-if="has_filed" key="3" class="row no-gutters mt-3">
                <p class="mb-3 ml-0 mr-3 alert col-auto p-2" :class="{'alert-info':$root.theme == 'bootstrap'}">
                    It appears that you have already filed a tax return this year
                </p>
                <form-button type="info" class="mb-3 col-auto p-2">view my return</form-button>
            </div>
            <div v-else-if="is_completed" class="row-no-gutters mt-3" key="4">
                <h6 class="mb-3 ml-0 mr-3 col-auto">It's nice to meet you, {{first_name}}</h6>
            </div>
        </transition>



    </div>
</template>

<script>
    import FormInput from "../form/FormInput";
    import {panel_mixin} from "../../mixin";
    import FormButton from "../form/FormButton";
    import NotepadAnimation from "../animation/NotepadAnimation";

    const axios = require('axios');

    export default {
        name: "personal-information-panel",
        components: {NotepadAnimation, FormButton, FormInput},
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
                return this.first_name != '' &&
                        this.last_name != '' &&
                        this.date_of_birth != '' &&
                        this.ssn != '' &&
                        !this.file_locked &&
                        !this.has_filed &&
                        !this.ssn_not_found

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
            },
            first_name:{
                get(){
                    return this.$store.state.first_name;
                },
                set(value){
                    this.$store.commit('set_first_name', value);
                }
            },
            last_name:{
                get(){
                    return this.$store.state.last_name;
                },
                set(value){
                    this.$store.commit('set_last_name', value);
                }
            },
            middle_name:{
                get(){
                    return this.$store.state.middle_name;
                },
                set(value){
                    this.$store.commit('set_middle_name', value);
                }
            },
            date_of_birth:{
                get(){
                    return this.$store.state.date_of_birth;
                },
                set(value){
                    this.$store.commit('set_date_of_birth', value);
                }
            }
        },
        watch: {
            ssn(nv, ov) {
                //Check for eligibility to file here. updates has_filed, file_locked, and ssn_not_found
            }
        }
    }
</script>

<style scoped>
    .panel {
        height: 100%;
        width: 100%;

    }
    h4, h5, h6{
       user-select:none;
    }
</style>