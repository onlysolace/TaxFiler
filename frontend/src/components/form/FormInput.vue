<template>
    <div class="input-container">
        <div class="input-group" >
            <div class="input-group-prepend">
                <span class="input-group-text">{{label}}</span>
            </div>
            <input type="text" class="form-control" :placeholder="placeholder" :value="value"
                    @change="$emit('input', $event.target.value)"
            >
        </div>
    </div>
</template>

<script>
    export default {
        name: "form-input",
        props:{
            placeholder: String,
            label: String,
            value: String
        },
        methods:{

        }
    }
</script>

<style scoped>
    .input-group-prepend{
        user-select:none;
    }
</style>