<template>
    <div class="panel col">
        <h5>Congratulations, you have successfully filed your tax return</h5>
        <div class="row">
            <div class="col">
                <svg>
                    <use :xlink:href="$resource('icons.svg') + '#requirement'">
                    </use>
                </svg>
            </div>
        </div>
    </div>
</template>

<script>
    import {panel_mixin} from "../../mixin";

    export default {
        name: "results-panel",
        mixins:[panel_mixin]
    }
</script>

<style scoped>

</style>