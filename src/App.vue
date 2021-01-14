<template lang="html">
  <div>
    <h1>Our Cool Energy Mix Tracker</h1>
    <generation-mix :energieslist="energies.generationmix"></generation-mix>
  </div>
</template>

<script>
// import GenerationMix from './components/GenerationMix.vue'
import GenerationMixer from './components/GenerationMixer.vue'

export default {
  name: 'app',
  data(){
    return {
      energies: {}
    }
  },
  components: {
    "generation-mix": GenerationMixer
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