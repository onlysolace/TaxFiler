var panel_mixin = {
    data(){
        return{
            name:this.$options._componentTag
        }
    },
    computed:{

    },
    watch:{
        is_completed:{
            immediate:true,
            handler(nv, ov){
                this.$store.commit('update_panel_data',{panel: this.name, data:{is_completed:nv}});
            }
        }
    }
};

export {panel_mixin}