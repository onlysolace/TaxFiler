<template>
    <div class="option" :class="[$root.theme,{selected:is_selected}]" @click="$emit('update:selected_option', label)">
        <checkmark-animation v-if="is_selected && animate"></checkmark-animation>
        <svg v-else>
            <use :xlink:href="active_icon"></use>
        </svg>
        <span>{{label}}</span>
    </div>

</template>

<script>
    import CheckmarkAnimation from "../animation/CheckmarkAnimation";
    export default {
        name: "form-option",
        components: {CheckmarkAnimation},
        props: {
            icon: String,
            label: String,
            selected_option: String,
            animate: Boolean
        },
        computed: {
            active_icon() {
                return this.is_selected ? this.$resource('icons.svg') + '#checkmark-circle' : this.icon;
            },
            is_selected() {
                return this.label == this.selected_option;
            }
        }
    }
</script>

<style scoped lang="scss">
    .option {
        width: 200px;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px;

        &:hover:not(.selected) {
            cursor: pointer;
        }

        /* Themes */
        &.minimalist, &.bootstrap {
            border-radius: 15px;
            border: 1px solid #BDBDBD;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

            &:hover:not(.selected) {
                box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 8px 22px 0 rgba(0, 0, 0, 0.19);
            }

            &.selected {
                background-color:#B9F6CA;
                border-color:#0DC36A;
            }
        }

        &.blue{
            border:1px solid #ccc;
            box-shadow: 1px 2px 2px #ccc;
            transition:.3s;

            &:hover{
                box-shadow: 0 0 0 #ccc;
                border: 1px solid #227dae;
            }
        }
    }
</style>