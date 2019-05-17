<template>
    <div class="main-view d-flex align-items-center flex-column">
        <div class="row mb-3 mt-3">
            <h5 class="col-12">Welcome to Booz Allen Tax,</h5>
            <h6 class="col-12">what would you like to do?</h6>
        </div>
        <div class="row">
            <svg>
                <use :xlink:href="$resource('icons.svg')+'#space'">

                </use>
            </svg>
        </div>
        <div class="row d-flex align-items-center">
            <div class="col-auto mt-3">
            <form-button type="secondary">view my return status</form-button>
            </div>
            <div class="col-auto mt-3">
                <form-button type="primary" @click.native="move_file_view">file a tax return</form-button>
            </div>
            <div class="col-auto mt-3">
                <button class="settings-button" @click="move_settings_view"><svg><use :xlink:href="$resource('icons.svg')+'#settings'"></use></svg></button>
            </div>
        </div>
    </div>
</template>

<script>
    import FormButton from '../../components/form/FormButton'
    export default {
        name: "main-view",
        props:{
            app_transition: String
        },
        methods:{
            move_file_view(){
                this.$emit('update:app_transition','next-transition');
                this.$router.push('/file');
            },
            move_settings_view(){
                this.$emit('update:app_transition', 'next-transition');
                this.$router.push('/settings');
            }
        },
        components:{FormButton}

    }
</script>

<style scoped lang="scss">

    .main-view{
        user-select:none;
    }

    .settings-button{
        background-color:transparent;
        border:none;
        outline:none;
        padding:5px;
        transition:.3s;
        border-radius:3px;

        &:hover{
            background-color:#EEEEEE;

            >svg{
                color:#BDBDBD;
            }
        }

        > svg{
            color:#757575;
            height:25px;
            width:25px;
        }
    }

</style>