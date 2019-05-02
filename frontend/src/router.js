import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import FileView from './components/view/FileView'
import MainView from "./components/view/MainView";
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
        }

    ]
})
