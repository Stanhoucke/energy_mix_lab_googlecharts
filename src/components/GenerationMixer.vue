<template lang="html">
  <div v-if="energieslist">
      <h3>Data from: {{from}} to: {{to}}</h3>
      <GChart
        type="ColumnChart"
        :data="chartData"
        :options="{
        chart: {
          title: 'Energy Generation Mix',
          subtitle: `Showing data from: ${from} to: ${to}`
        }
      }"/>
  </div>

</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
    name: 'generation-mix',
    data(){
        return {
            generationMix: []

        

            // generationMix: [
            //   ["Fuel", "Percentage"],
            // ["object.fuelValue", object.percValue]
            //   ["Nuclear", 20.4],
            //   ["Hydro", 18.9],
            //   ...
            // ]


        }
    },
    props: ['energieslist', 'from', 'to'],
    computed: {
        chartData: function() {
            const googleData = [];

            const titles = ["Fuel", "Percentage"];

            // console.log(this.energieslist);

            const energyData = this.energieslist.map((energy) => {
                    // console.log(Object.values(energy));
                let energyArray = Object.values(energy);
                googleData.push(energyArray);
            } )
            googleData.unshift(titles);
            return googleData;
        }
    },
    methods: {
        // methods go here
    },
    components: {
        GChart
    },
    mounted(){
        
    }

}
</script>

<style lang="css" scoped>

</style>