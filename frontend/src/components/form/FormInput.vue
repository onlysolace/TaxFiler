<template>
    <div class="input-container">
        <div class="input-group" v-if="$root.theme == 'bootstrap'">
            <div class="input-group-prepend">
                <span class="input-group-text">{{label}}</span>
            </div>
            <input type="text" class="form-control" :placeholder="placeholder">
        </div>
    </div>
</template>

<script>
    export default {
        name: "form-input",
        props:{
            placeholder: String,
            label: String
        }
    }
</script>

<style scoped>

</style>