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
        components: {NotepadAnimationFrames},
        mixins:[panel_mixin],
        data() {
            return {
                processing: true,
                filing: true,
                error:false,
                timeout_id:''
            }
        },
        computed:{
            is_completed(){
                return !this.processing && !this.filing && !this.error;
            },
            ...mapState(['ssn','first_name','last_name','middle_name','date_of_birth','filing_status','income']),
            tax_submission(){
                return{
                    ssn: this.ssn,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    middle_name: this.middle_name,
                    date_of_birth: this.date_of_birth,
                    filing_status: this.filing_status,
                    income: this.income
                }
            }
        },
        activated(){
            this.processing = true;
            this.timeout_id = setTimeout(() => {
                this.processing = false;
            }, 15000);

            console.log('activated running');
            axios.post('/file',this.tax_submission).then(response => {
                this.filing = false;
            }).catch(error => {
                this.filing = false;
                this.error = true;
            });
        },
        deactivated(){
            clearTimeout(this.timeout_id);
            this.processing = false;
        }
    }
</script>

<style scoped>

</style>