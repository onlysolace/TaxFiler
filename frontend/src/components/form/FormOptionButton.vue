<template>
    <button class="form-option-button">
     <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "form-option-button"
    }
</script>

<style scoped lang="scss">
    .form-option-button{
        padding:5px;
        border:1px solid #00695C;
        border-radius:4px;
        transition:.3s;

        &:hover:not(.active){
            cursor:pointer;
            background-color:#00695C;
            border-color:#004D40;
            color:#E0F2F1 !important;
        }

        &.active{
            background-color:#00695C;
            border-color:#004D40;
            color:#E0F2F1 !important;
        }

        &.active:hover:not(.removable){
            cursor:default;
        }

    }
</style>