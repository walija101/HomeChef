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
        type: String,
        required: true
    },
    stars: {
        type: Number,
        required: true
    }
}, { collection: 'Reviews', timestamps: true });

const Review = models.Review || model('Review', ReviewSchema);

type createReviewData = {
    order: string,
    chef: string,
    description: string,
    stars: number
}

export async function createReview(data : createReviewData) {
    const {order, chef, description, stars} = data
    const review: {
        order: string, chef: string, description?:string, stars: number
    } = {
        order: order,
        chef: chef,
        description: description,
        stars: stars
    }

    return (await Review.create(review));
}

export default Review;