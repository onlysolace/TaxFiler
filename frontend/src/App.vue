<template>
    <div id="app" class="container">
        <div class="row mb-3">
            <div class="col">
                <progress-bar></progress-bar>
            </div>
        </div>

        <div class="row mb-5 d-flex">
            <keep-alive>
            <component :is="$root.panels[$root.active_panel_index]" ref="panel"></component>
            </keep-alive>
        </div>
        <div class="row mb-1">
            <hr class="col">
        </div>
        <div class="row">
            <div class="col-auto pl-0">
                <form-button @click.native="$store.commit('prev_panel'); test()" v-if="has_prev_panel">go back</form-button>
            </div>
            <div class="col-auto pl-0">
                <form-button @click.native="$store.commit('next_panel')">continue</form-button>
            </div>
        </div>

    </div>
</template>

<script>
    import TaxProficiencyPanel from './components/panel/TaxProficiencyPanel';
    import PersonalInformationIntroPanel from './components/panel/PersonalInformationIntroPanel';
    import PersonalInformationPanel from './components/panel/PersonalInformationPanel'
    import ProgressBar from "./components/status/ProgressBar";
    import FormButton from "./components/form/FormButton";
    import {mapGetters} from 'vuex'

    export default {
        name: 'app',
        components: {
            FormButton,
            ProgressBar,
            TaxProficiencyPanel,
            PersonalInformationIntroPanel,
            PersonalInformationPanel
        },
        data() {
            return{

            }
        },
        methods:{
            test(){
                console.log(this.$refs.panel);
            }
        },
        computed:{
            can_continue(){
                return this.has_next_panel;
            },
            ...mapGetters(['has_next_panel','has_prev_panel']),
        }

    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    #app {
        display: flex;
        flex-direction: column;
    }
    hr{
        color:#BDBDBD;
    }
</style>
