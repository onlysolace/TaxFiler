<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "form-button",
        props:{
           type: String
        },
        mounted(){
            if(this.$el.classList.contains('bootstrap')){
                this.$el.classList.add('btn');
                this.$el.classList.add('btn-'+this.type);
            }
        }

    }
</script>

<style scoped lang="scss">
    button{
        &.blue{
            background-color:#227dae;
            color:#fff;
            border:1px solid #2e6da4;
            border-radius:4px;
            padding:10px 20px;
            outline:none;
            transition:.3s;

            &:hover{
                background-color:#234e76;
                border-color:#204d74;
            }

            &:active, &:focus{
                box-shadow: 0 0 0.5rem 0 #2da5e5;
            }
         }
    }
</style>