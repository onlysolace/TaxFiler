var resource_mixin = {
    methods:{
        resource(file_name){
            return require('./assets/'+file_name);
        }
    }
}

export {resource_mixin}