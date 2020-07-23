


export const harvestPlants = (plantsArray) => {
    const arrayOfSeedObjects = []
    plantsArray.forEach(plant => {
        if (plant.type !== "Corn") {
            for (const i = 0;  i < plant.output; i++) {
                return arrayOfSeedObjects.push(plant)
            } 
        } else {
            return arrayOfSeedObjects.push(plant)
        }
    });
    return arrayOfSeedObjects
}