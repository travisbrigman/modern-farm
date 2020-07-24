

const contentTarget = document.querySelector(".container")

export const Catalog = (harvestedPlants) => {
    harvestedPlants.forEach(plant => {
        contentTarget.innerHTML += `
            <section class= "plant">${plant.type}</section>
        `
    })

}


