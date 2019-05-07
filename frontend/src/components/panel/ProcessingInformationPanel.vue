<template>
    <div class="panel col">
        <h5>We have all the information we need!</h5>
        <h6>We're preparing your tax return for you...</h6>
        <div class="row">
            <div class="col-auto ml-auto mr-auto">
              <notepad-animation-frames :active="processing"></notepad-animation-frames>
            </div>
        </div>
        <transition name="slide-up">
        <h6 v-if="is_completed">All done! Click continue to view your results</h6>
        </transition>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";
    import NotepadAnimation from "../animation/NotepadAnimation";
    import NotepadAnimationFrames from "../animation/NotepadAnimationFrames";
    import {mapState} from 'vuex';
    const axios = require('axios');

    export default {
        name: "processing-information-panel",
        components: {NotepadAnimationFrames, NotepadAnimation},
        mixins:[panel_mixin],
        data() {
            return {
                processing: true,
                filing: true,
                error:false
            }
        },
        computed:{
            is_completed(){
                return !this.processing && !this.filing && !this.error;
            },
            ...mapState(['ssn'])
        },
        activated(){
            setTimeout(() => {
                this.processing = false;
            }, 15000);


            axios.post('http://localhost:8080/file',{ssn:this.ssn}).then(response => {
                this.filing = false;
            }).catch(error => {
                this.filing = false;
                this.error = true;
            });
        },
        deactivated(){
            this.processing = true;
        }
    }
</script>

<style scoped>

</style>