const URL = "http://localhost:8000/cheese/"

export const CheesesLoader = async () => {
    const data = await fetch(URL)
    const cheeses = await data.json()
    console.log(cheeses)
    return cheeses
}

export const ShowCheese = async ({params}) => {
    const data = await fetch(URL+params.id)
    const cheese = await data.json()
    console.log(cheese)
    return cheese
}