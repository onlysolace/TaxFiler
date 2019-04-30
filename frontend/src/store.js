import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme:'bootstrap',
        active_panel_index:0,
        panels:['TaxProficiencyPanel','PersonalInformationIntroPanel','PersonalInformationPanel'],

    },
    mutations: {
        next_panel(state){
            state.active_panel_index++;
        },
        prev_panel(state){
            state.active_panel_index--;
        },
        mark_complete_panel(state, payload){

        }
    },
    actions: {

    },
    getters:{
        has_next_panel: state => {
            return state.active_panel_index + 1 < state.panels.length;
        },
        has_prev_panel: state => {
            return state.active_panel_index > 0;
        }
    }

})
