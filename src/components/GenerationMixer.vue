<template lang="html">
  <div>
      <GChart
        type="ColumnChart"
        :data="generationMix"
        :options="chartOptions"/>
  </div>

</template>

<script>
import { GChart } from 'vue-google-charts';

export default {
    name: 'generation-mix',
    data(){
        return {
            generationMix: [],

        chartOptions: {
        chart: {
          title: "Energy Generation Mix",
          subtitle: "Showing data from: ___ to: ___"
        }
      }
           

            // generationMix: [
            //   ["Fuel", "Percentage"],
            // ["object.fuelValue", object.percValue]
            //   ["Nuclear", 20.4],
            //   ["Hydro", 18.9],
            //   ...
            // ]


        }
    },
    props: ['energieslist'],
    computed: {
        chartData: function() {
            const googleData = [];

            const titles = ["Fuel", "Percentage"];

            // console.log(this.energieslist);

            const energyData = this.energieslist.map((energy) => {
                    // console.log(Object.values(energy));
                let energyArray = Object.values(energy);
                this.generationMix.push(energyArray);
            } )
            this.generationMix.unshift(titles);
            // return googleData;
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