<template>
    <div class="settings-view d-flex flex-column">
        <div class="row mt-3">
            <h4 class="col-12">Settings</h4>
        </div>
        <div class="row">
            <h6 class="col-md-6">Theme</h6>
        </div>
        <div class="row mb-3">
            <div class="col-auto" v-for="theme_option in available_themes" :key="theme_option">
                <form-option-button :style="{color:'#00695C'}" :class="{active:theme_option == theme}" @click.native="$store.commit('set_theme',theme_option)">{{theme_option}}</form-option-button>
            </div>
        </div>
        <div class="row">
            <h6 class="col-md-6">Active Panels</h6>
        </div>
        <div class="row mb-3">
            <div class="col-auto mb-3" v-for="panel in all_panels" :key="panel">
                <form-option-button class="d-flex align-items-center" :class="{active:active_panels.includes(panel), removable:removable_panels.includes(panel)}" @click.native="toggle_panel(panel)">
                    <svg :class="{visible:active_panels.includes(panel)}" class="mr-2">
                        <use :xlink:href="$resource('icons.svg') + '#check'"></use>
                    </svg>
                    <span>{{panel}}</span>
                </form-option-button>
            </div>
        </div>
        <div class="row">
            <div class="col">
            <form-button @click.native="move_main_menu" type="secondary">Back to main menu</form-button>
            </div>
        </div>
    </div>
</template>

<script>
    import FormButton from "../form/FormButton";
    import {mapState, mapGetters} from 'vuex';
    import FormOptionButton from "../form/FormOptionButton";
    export default {
        name: "settings-view",
        components: {FormOptionButton, FormButton},
        methods:{
            move_main_menu(){
                this.$emit('update:app_transition', 'prev-transition');
                this.$router.push('/');

            },
            toggle_panel(panel){
                if(this.required_panels.includes(panel)){
                    return;
                }
                this.$store.commit('update_panel_data',{panel:panel,data:{removed:this.active_panels.includes(panel)}});
                this.$store.commit('reset_panel_index');

            }

        },
        computed:{
            ...mapState(['available_themes','theme','all_panels']),
            ...mapGetters(['active_panels','removable_panels','required_panels'])
        }
    }
</script>

<style scoped lang="scss">
    svg{
        height:18px;
        width:18px;
        opacity:0;

        &.visible{
            opacity: 1;
         }
    }
</style>