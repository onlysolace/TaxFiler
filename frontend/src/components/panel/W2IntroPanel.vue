<template>
   <div class="panel col">
       <div class="row no-gutters d-flex justify-content-center">
       <h2>Alright {{first_name}}. Let's get some more info about your income</h2>
       </div>
       <div class="row">
           <svg class="ml-auto mr-auto mt-2">
               <use :xlink:href="$resource('icons.svg') + '#income'"></use>
           </svg>
       </div>
       <div class="row mt-2">
           <h5 class="col d-flex justify-content-center">Here's whats coming up:</h5>
       </div>
       <div class="row">
           <h6 class="col d-flex justify-content-center">We'll get some info from the W2 you told us about earlier</h6>
       </div>
   </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";
    import {mapState} from 'vuex'

    export default {
        name: "w2-intro-panel",
        mixins:[panel_mixin],
        computed:{
            is_completed(){
                return true;
            },
            ...mapState(['first_name'])
        }
    }
</script>

<style scoped>

</style>