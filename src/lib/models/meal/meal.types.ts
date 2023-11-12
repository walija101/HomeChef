export type MealType = {
    _id: string,
    name: string,
    description: string,
    price: number,
    ingredients: string[],
    chef: string,
    chefPicture:  string
    cookTime: string,
    pickupTime: string,
    image: string,
    createdAt: Date,
    updatedAt: Date, 
}