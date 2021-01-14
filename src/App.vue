<template lang="html">
  <h1>Our Cool Energy Mix Tracker</h1>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      energies: []
    }
  },
  mounted(){
    fetch('https://api.carbonintensity.org.uk/generation')
    .then(res => res.json())
    .then(energies => this.energies = energies)
  }
}
</script>

<style>

</style>