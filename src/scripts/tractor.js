import { createAsparagus } from "./seeds/asparagus.js";
import { addPlant } from "./field.js"
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";



export const plantSeeds = (yearlyPlantingPlan) => {

    yearlyPlantingPlan.forEach(element => {
        element.forEach(foodType => {
            // see what food type is equal to, whatever it is equal to, invoke the corresponding "create" function and add that seed to the plant array (using addPlant())
            
            if (foodType === "Asparagus") {
                addPlant(createAsparagus())
            } else if (foodType === "Corn") {
                addPlant(createCorn())
            } else if (foodType === "Potato") {
                addPlant(createPotato())
            } else if (foodType === "Soybean") {
                addPlant(createSoybean())
            } else if (foodType === "Sunflower") {
                addPlant(createSunflower())
            } else if (foodType === "Wheat") {
                addPlant(createWheat())
            }
        })
    });
}