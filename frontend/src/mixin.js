var panel_mixin = {
    data(){
        return{
            name:this.$options._componentTag
        }
    },
    computed:{
        active_panel_name(){
            return this.$store.state.panels[this.$store.state.active_panel_index];
        }
    }
}

export {panel_mixin}