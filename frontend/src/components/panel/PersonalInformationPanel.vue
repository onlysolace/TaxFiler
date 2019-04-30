<template>
    <div class="panel pl-3 pr-3">
        <h4>Let's start by getting to know you</h4>
        <h5>We need just a few personal details...</h5>

        <div class="row no-gutters mt-3">
            <form-input label="First Name" class="p-1 col-lg-4 col-md-6"></form-input>
            <form-input label="Last Name" class="p-1 col-lg-4 col-md-6"></form-input>
            <form-input label="Middle Name" class="p-1 col-lg-4 col-md-6"></form-input>
        </div>
        <div class="row no-gutters mt-3">
            <form-input label="Date of Birth" class="p-1"></form-input>
        </div>
        <div class="row no-gutters mt-3">
            <form-input label="SSN" class="p-1"></form-input>
        </div>
    </div>
</template>

<script>
    import FormInput from "../form/FormInput";
    export default {
        name: "personal-information-panel",
        components: {FormInput}
    }
</script>

<style scoped>
    .panel{
        height:100%;
        width:100%;
    }
</style>