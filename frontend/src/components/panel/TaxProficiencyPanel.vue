<template>
    <div class="panel col">
        <div class="row">
            <form-title class="col justify-content-center d-flex">
            How comfortable are you with taxes?
            </form-title>
        </div>
        <div class="row">
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="item">hey
                    <span class="test">hhihihihih</span>
                </div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="item">hey2</div>
            </div>
            <div class="col-sm-6 col-md-4 col-lg-3">
                <div class="item">hey3</div>
            </div>
        </div>
    </div>
</template>

<script>
    import FormTitle from '../form/FormTitle'
    export default {
        name: "tax-proficiency-panel",
        components: {FormTitle}
    }
</script>

<style scoped lang="scss">
    .item{
        height:300px;
        width:300px;

        .test{
            color:green;
        }
    }
</style>