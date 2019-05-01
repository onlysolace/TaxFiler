import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        theme: 'bootstrap',
        active_panel_index: 0,
        panels: ['TaxProficiencyPanel', 'PersonalInformationIntroPanel', 'PersonalInformationPanel'],
        panel_data: {}
    },
    mutations: {
        next_panel(state) {
            state.active_panel_index++;
        },
        prev_panel(state) {
            state.active_panel_index--;
        },
        update_panel_data(state, payload) {
          //  state.panel_data[payload.panel] = Object.assign(state.panel_data[payload.panel] || {}, payload.data);
            Vue.set(state.panel_data, payload.panel, Object.assign(state.panel_data[payload.panel] || {}, payload.data));
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
