<template>
    <div class="input-container">
        <div class="input-group" v-if="$root.theme == 'bootstrap'">
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

</style>