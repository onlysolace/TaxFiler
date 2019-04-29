<template>
    <h4 class="form-title"><slot></slot></h4>
</template>

<script>
    export default {
        name: "form-title",
        props:{
            title: String
        }
    }
</script>

<style scoped>

</style>