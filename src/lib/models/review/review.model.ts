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

ReviewSchema.statics.createReview = async function(data) {
    const {order, chef, description, stars} = data
    const review: {
        order: string, chef: string, description?:string, stars: number
    } = {
        order: order,
        chef: chef,
        stars: stars
    }
    if (description) 
        review.description = description

    return (await this.create(review));
}

export default Review;