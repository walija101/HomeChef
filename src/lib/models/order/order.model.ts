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
    orderTime: {
        type: Date,
        required: true
    },
    pickupStatus: {
        type: Boolean,
        default: false
    }
}, { collection: 'Orders', timestamps: true });

const Order = models.Order || model('Order', OrderSchema);

export default Order;