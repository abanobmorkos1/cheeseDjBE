const URL = "https://django-cheese-backend-yyy9.onrender.com"

export const CheesesLoader = async () => {
    const data = await fetch(URL)
    const cheeses = await data.json()
    console.log(cheeses)
    return cheeses
}

export const ShowCheese = async ({params}) => {
    const data = await fetch(URL+`/cheese/${params.id}/`)
    const cheese = await data.json()
    console.log(cheese)
    return cheese
}