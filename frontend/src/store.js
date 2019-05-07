import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'bootstrap',
        active_panel_index: 0,
        panels: ['TaxProficiencyPanel', 'PersonalInformationIntroPanel', 'PersonalInformationPanel','LastYearTaxMethodPanel','MaritalStatusPanel','PlaceholderPanel','ProcessingInformationPanel','ResultsPanel'],
        panel_data: {},
        ssn: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        date_of_birth:''
    },
    mutations: {
        next_panel(state) {
            state.active_panel_index++;
        },
        prev_panel(state) {
            state.active_panel_index--;
        },
        update_panel_data(state, payload) {
            Vue.set(state.panel_data, payload.panel, Object.assign(state.panel_data[payload.panel] || {}, payload.data));
        },
        set_ssn(state, ssn) {
            state.ssn = ssn;
        },
        set_first_name(state, first_name){
            state.first_name = first_name;
        },
        set_last_name(state, last_name){
            state.last_name = last_name;
        },
        set_middle_name(state, middle_name){
            state.middle_name = middle_name;
        },
        set_date_of_birth(state, date_of_birth){
            state.date_of_birth = date_of_birth;
        }
    },
    actions: {},
    getters: {
        has_next_panel: state => {
            return state.active_panel_index + 1 < state.panels.length;
        },
        has_prev_panel: state => {
            return state.active_panel_index > 0;
        },
        active_panel_name: state => {
            return state.panels[state.active_panel_index];
        },
        can_continue: (state, getters) => {
            return getters.has_next_panel && state.panel_data[getters.active_panel_name] && state.panel_data[getters.active_panel_name].is_completed;
        }
    }

})
