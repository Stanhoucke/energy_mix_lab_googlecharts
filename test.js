const generationmix = [
    {
      "fuel": "gas",
      "perc": 43.6
    },
    {
      "fuel": "coal",
      "perc": 0.7
    },
    {
      "fuel": "biomass",
      "perc": 4.2
    },
    {
      "fuel": "nuclear",
      "perc": 17.6
    },
    {
      "fuel": "hydro",
      "perc": 1.1
    },
    {
      "fuel": "imports",
      "perc": 6.5
    },
    {
      "fuel": "other",
      "perc": 0.3
    },
    {
      "fuel": "wind",
      "perc": 6.8
    },
    {
      "fuel": "solar",
      "perc": 18.1
    }
  ]
const googleData = []
const titles = ["Fuel", "Percentage"]

const energyData = generationmix.map((energy) => {
    // console.log(Object.values(energy));
    let energyArray = Object.values(energy);
    googleData.push(energyArray);
} )
googleData.unshift(titles)

console.log(googleData);


