import Vue from 'vue'
import Router from 'vue-router'

import FileView from './components/view/FileView';
import MainView from "./components/view/MainView";
import SettingsView from './components/view/SettingsView'
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            component:MainView
        },
        {
            path:'/file',
            component: FileView
        },
        {
            path:'/settings',
            component: SettingsView
        }

    ]
})
