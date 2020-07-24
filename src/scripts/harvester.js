


export const harvestPlants = (plantsArray) => {
    const arrayOfSeedObjects = []
    plantsArray.forEach(plant => {
        if (plant.type !== "Corn") {
            for (var i = 0;  i < plant.output; i++) {
                arrayOfSeedObjects.push(plant)
            } 
        } else {
            for (var i = 0; i < (plant.output / 2); i++) {
                arrayOfSeedObjects.push(plant)
            }
        }
    });
    return arrayOfSeedObjects
}