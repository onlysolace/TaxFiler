import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'blue',
        available_themes: ['bootstrap', 'blue'],
        active_panel_index: 0,
        all_panels: ['TaxProficiencyPanel', 'PersonalInformationIntroPanel', 'PersonalInformationPanel', 'LastYearTaxMethodPanel', 'MaritalStatusPanel', 'W2IntroPanel','W2ConfirmationPanel','W2EmployerIdPanel','W2Panel', 'ProcessingInformationPanel', 'ResultsPanel'],
        panel_data: {},
        ssn: '',
        first_name: '',
        last_name: '',
        middle_name: '',
        date_of_birth: '',
        filing_status:'',
        income:''
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
        set_first_name(state, first_name) {
            state.first_name = first_name;
        },
        set_last_name(state, last_name) {
            state.last_name = last_name;
        },
        set_middle_name(state, middle_name) {
            state.middle_name = middle_name;
        },
        set_date_of_birth(state, date_of_birth) {
            state.date_of_birth = date_of_birth;
        },
        set_theme(state, new_theme) {
            state.theme = new_theme;
        },
        set_filing_status(state, filing_status){
            state.filing_status = filing_status;
        },
        set_income(state, income){
            state.income = income;
        },
        reset_panel_index(state) {
            state.active_panel_index = 0;
        }
    },
    actions: {
        toggle_panel({commit, getters}, payload) {
            if(getters.required_panels.includes(payload.panel)){
                return;
            }

            commit('update_panel_data',
                {
                    panel: payload.panel,
                    data: {
                        removed: getters.active_panels.includes(payload.panel)
                    }
                });
            commit('reset_panel_index');
        }
    },
    getters: {
        active_panels: state => {
            return state.all_panels.filter(panel => !state.panel_data[panel] || !state.panel_data[panel].removed);
        },
        has_next_panel: (state, getters) => {
            return state.active_panel_index + 1 < getters.active_panels.length;
        },
        has_prev_panel: state => {
            return state.active_panel_index > 0;
        },
        active_panel_name: (state, getters) => {
            return getters.active_panels[state.active_panel_index];
        },
        can_continue: (state, getters) => {
            return getters.has_next_panel && state.panel_data[getters.active_panel_name] && state.panel_data[getters.active_panel_name].is_completed;
        },
        removable_panels: (state, getters) => {

            return state.all_panels.filter(panel => !getters.required_panels.includes(panel));
        },
        required_panels: () => {
            return ['PersonalInformationPanel', 'ProcessingInformationPanel', 'ResultsPanel'];
        }
    }

})
