

const contentTarget = document.querySelector(".container")

export const Catalog = (harvestedPlants) => {
    harvestedPlants.map(plant => {
        contentTarget.innerHTML += `
            <section class= "plant">${plant.type}</section>
        `
    })

}


