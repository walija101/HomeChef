import { Mongoose, Schema, model, models } from 'mongoose';

const ReviewSchema = new Schema({
    order: {
        type: String,
        ref: "Order",
        required: true
    },
    chef: {
        type: String,
        ref: "User",
        required: true
    },
    description: {
        type: String
    },
    stars: {
        type: Number,
        required: true
    }
}, { collection: 'Reviews', timestamps: true });

const Review = models.Review || model('Review', ReviewSchema);

export default Review;