<template>
    <div class="option d-flex justify-content-center">
        <div class="content" :class="[$root.theme,{selected:is_selected}]" @click="$emit('update:selected_option', label)">
        <svg>
            <use :xlink:href="active_icon"></use>
        </svg>
        <span>{{label}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "form-option",
        props:{
            icon: String,
            label: String,
            selected_option: String
        },
        computed:{
            active_icon(){
                return this.is_selected ? this.$resource('icons.svg')+'#checkmark-circle' : this.icon;
            },
            is_selected(){
                return this.label == this.selected_option;
            }
        }
    }
</script>

<style scoped lang="scss">
    .content{
        width:200px;
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:10px;

        &:hover{
            cursor:pointer;
        }

        /* Themes */
        &.minimalist{
            border-radius:15px;
            border:1px solid #EEEEEE;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            &:hover{
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 22px 0 rgba(0, 0, 0, 0.19);
            }
            &.selected{

            }
        }
    }
</style>