import { Mongoose, Schema, model, models } from 'mongoose';

const MealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    ingredients: [{
        type: String,
        required: true
    }],
    chef: {
        type: String,
        ref: "User",
        required: true
    },
    cookTime: { // Time which the meal will be made at.
        type: String,
        required: true
    },
    pickupTime: { // Time which the meal can be picked up.
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { collection: 'Meals', timestamps: true });

const Meal = models.Meal || model('Meal', MealSchema);

type createMealData = {
    name: string,
    description: string,
    price: number,
    ingredients: string[], 
    chef: string, 
    cookTime: string, 
    pickupTime: string,
    image: string
}
export async function createMeal(data: createMealData) {
    const {name, description, price, ingredients, chef, cookTime, pickupTime, image} = data
    const meal: {
        name: string, description: string, price: number, ingredients: string[], chef: string, cookTime: string, pickupTime: string,  image: string
    } = {name, description, price, ingredients, chef, cookTime, pickupTime, image}
    await Meal.create(meal)
}

export default Meal;