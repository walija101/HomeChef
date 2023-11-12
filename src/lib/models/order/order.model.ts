import { Mongoose, Schema, model, models } from 'mongoose';

const OrderSchema = new Schema({
    meal: {
        type: String,
        ref: "Meal",
        required: true
    },
    user: {
        type: String,
        ref: "User",
        required: true
    },
    status: {
        type: String,
        required: false
    }
}, { collection: 'Orders', timestamps: true });

const Order = models.Order || model('Order', OrderSchema);

OrderSchema.statics.createOrder = async function(data) {
    const {meal, user} = data
    const order: { 
        meal: string, user: string 
    } = {
        meal: meal,
        user: user
    }
    return (await this.create(order));
}

export default Order;