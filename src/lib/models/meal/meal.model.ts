import { Mongoose, Schema, model, models } from 'mongoose';

const MealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true
    },
    ingrediants: [{
        type: String
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
    image: {
        type: String,
        required: true
    }
}, { collection: 'Meals', timestamps: true });

const Meal = models.Meal || model('Meal', MealSchema);

export default Meal;