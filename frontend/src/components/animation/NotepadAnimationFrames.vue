<template>
    <svg>
        <use :xlink:href="current_frame_url"></use>
    </svg>
</template>

<script>
    export default {
        name: "notepad-animation-frames",
        props:{
            active: Boolean
        },
        data(){
            return{
                current_frame:0,
                interval_id:''
            }
        },
        methods:{
            start_animation(){
                this.interval_id = setInterval(() => {
                    this.current_frame++;
                    if (this.current_frame == 19) {
                        if(!this.active){
                            this.current_frame = 18;
                            clearInterval(this.interval_id);
                        }
                        else {
                            this.current_frame = 0;
                        }
                    }

                }, 63);
            }
        },
        computed:{
            current_frame_url(){
                return this.$resource('notepad-animation.svg') + '#frame' + this.current_frame;
            }
        },
        watch:{
            active:{
                immediate:true,
                handler(nv, ov){
                    if(nv){
                        this.start_animation();
                    }
                }
            }
        },
        created(){


        },
        destroyed(){
            console.log('destroyed hook');
            clearInterval(this.interval_id);
        },
        activated(){
            console.log('activated from icon');
        }

    }
</script>

<style scoped>

</style>