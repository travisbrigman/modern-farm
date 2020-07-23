
import { plantSeeds } from "./tractor.js"
import { addPlant, usePlants } from "./field.js"
import { createPlan } from "./plan.js"
import { harvestPlants } from "./harvester.js"

const plantingPlan = createPlan()
plantSeeds(plantingPlan)
const plantedField = usePlants()
console.log(plantedField)

const harvestTime = harvestPlants(plantedField)

console.log(harvestTime)