<template>
    <div class="form-radio-button d-flex align-items-center">
        <input type="radio" :name="group" :id="value" class="mr-2" @change="$emit('selection',value)">
        <label :for="value">{{value}}</label>
    </div>
</template>

<script>
    export default {
        name: "form-radio-button",
        props:{
            value: String,
            group: String
        }
    }
</script>

<style scoped lang="scss">
    .form-radio-button{
        input{
            height:24px;
            width:24px;
        }
        label{
            margin-bottom:0;
        }
    }
</style>