<template>
    <div class="file-view">
        <div class="row mb-3">
            <div class="col">
                <progress-bar></progress-bar>
            </div>
        </div>

        <div class="row mb-5 d-flex">
            <transition :name="transition_name">
                <keep-alive>
                    <component :is="$root.panels[$root.active_panel_index]" ref="panel"></component>
                </keep-alive>
            </transition>

        </div>
        <div class="row mb-1">
            <hr class="col">
        </div>
        <div class="row mb-3">
            <div class="col-auto pl-0">
                <form-button @click.native="move_prev_panel" v-if="has_prev_panel" type="secondary">go back</form-button>
            </div>
            <div class="col-auto pl-0">
                <form-button @click.native="move_next_panel" v-if="can_continue" type="primary">continue</form-button>
            </div>
            <div class="col pl-0 d-flex">
                <form-button @click.native="move_main_menu" type="dark" class="ml-auto">back to main menu</form-button>
            </div>
        </div>

    </div>

</template>

<script>
    import TaxProficiencyPanel from '../../components/panel/TaxProficiencyPanel';
    import PersonalInformationIntroPanel from '../../components/panel/PersonalInformationIntroPanel';
    import PersonalInformationPanel from '../../components/panel/PersonalInformationPanel'
    import ProgressBar from "../../components/status/ProgressBar";
    import FormButton from "../../components/form/FormButton";
    import {mapGetters} from 'vuex'

    export default {
        name: "file-view",
        props:{
           app_transition: String
        },
        components: {
            FormButton,
            ProgressBar,
            TaxProficiencyPanel,
            PersonalInformationIntroPanel,
            PersonalInformationPanel
        },
        data(){
            return{
                transition_name:'next-transition'
            }
        },
        methods:{
            move_next_panel(){
                this.transition_name = 'next-transition';
                this.$store.commit('next_panel');


            },
            move_prev_panel(){
                this.transition_name = 'prev-transition';
                this.$store.commit('prev_panel');


            },
            move_main_menu(){
                this.$emit('update:app_transition', 'prev-transition');
                this.$router.push('/');

            }
        },
        computed:{
            ...mapGetters(['has_next_panel','has_prev_panel','can_continue'])
        }
    }
</script>

<style scoped>
    .content{

    }

</style>