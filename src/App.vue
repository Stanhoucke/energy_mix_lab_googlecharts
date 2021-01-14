<template lang="html">
  <div>
    <h1>Our Cool Energy Mix Tracker</h1>
    <generation-mix :energies-list="energies.generationmix"></generation-mix>
  </div>
</template>

<script>
import GenerationMix from './components/GenerationMix.vue'

export default {
  name: 'app',
  data(){
    return {
      energies: []
    }
  },
  components: {
    "generation-mix": GenerationMix
  },
  mounted(){
    fetch('https://api.carbonintensity.org.uk/generation')
    .then(res => res.json())
    .then(energies => this.energies = energies.data)
  }
}
</script>

<style lang="css" scoped>

</style>