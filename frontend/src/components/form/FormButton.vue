<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "form-button",
        mounted(){
            if(this.$el.classList.contains('bootstrap')){
                this.$el.classList.add('btn');
                this.$el.classList.add('btn-primary');
            }
        }

    }
</script>

<style scoped lang="scss">
    button{
        &.minimalist{

         }
    }
</style>