<template lang="html">
  <div v-if="energies">
    <h1>Our Cool Energy Mix Tracker</h1>
    <generation-mix :energieslist="energies.generationmix" :from="energies.from" :to="energies.to"></generation-mix>
  </div>
</template>

<script>
import GenerationMixer from './components/GenerationMixer.vue'

export default {
  name: 'app',
  data(){
    return {
      energies: null
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