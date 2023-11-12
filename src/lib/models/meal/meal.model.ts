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
    ingrediants: [{
        type: String,
        required: true
    }],
    chef: {
        type: String,
        ref: "User",
        required: true
    },
    cookTime: { // Time which the meal will be made at.
        type: Date,
        required: true
    },
    pickupTime: { // Time which the meal can be picked up.
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, { collection: 'Meals', timestamps: true });

const Meal = models.Meal || model('Meal', MealSchema);

MealSchema.statics.createMeal = async function(data) {
    const {name, description, price, ingrediants, chef, cookTime, pickupTime, image} = data
    const meal: {
        name: string, description: string, price: number, ingrediants: string[], chef: string, cookTime: Date, pickupTime: Date,  image: string
    } = {
        name: name,
        description: description,
        price: price,
        ingrediants: ingrediants, 
        chef: chef,
        cookTime: cookTime, 
        pickupTime: pickupTime,
        image: image
    }
    await this.create(meal)
}

export default Meal;