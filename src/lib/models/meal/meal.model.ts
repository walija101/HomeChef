import { Schema, model, models } from 'mongoose';

const MealSchema = new Schema({
    
}, { collection: 'Meals', timestamps: true });

const Meal = models.Meal || model('User', MealSchema);

export default Meal;