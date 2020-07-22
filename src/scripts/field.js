let field = []

//should check if an object is an array. If it is, it should decompose that array into objects

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject)) {
        seedObject.forEach(seed => {
            field.push(seed)
        });
    } else {
        return field.push(seedObject)
    }
}

export const usePlants = () => {
    return field.slice()
}




 

