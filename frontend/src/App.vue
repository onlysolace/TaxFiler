<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <progress-bar></progress-bar>
      </div>
    </div>

    <div class="row">
      <component :is="active_panel"></component>
    </div>
  </div>
</template>

<script>
import TaxProficiencyPanel from './components/panel/TaxProficiencyPanel';
import ProgressBar from "./components/status/ProgressBar";

  export default {
  name: 'app',
  components: {
    ProgressBar,
    TaxProficiencyPanel
  },
  data() {
    return {
      theme: 'minimalist',
      active_panel: 'TaxProficiencyPanel'
    }
  },
  methods:{

  }
}
</script>

<style>
  *{
    box-sizing:border-box;
  }
  #app{
    display:flex;
    flex-direction:column;
  }
</style>
