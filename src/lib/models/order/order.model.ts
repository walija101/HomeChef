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

type createOrderData = {
    meal: string,
    user: string,
    status: string,
    [key: string]: any
}

export async function createOrder(data : createOrderData) {
    const {meal, user, status} = data
    const order: { 
        meal: string, user: string, status: string 
    } = {
        meal: meal,
        user: user,
        status: status
    }
    return (await Order.create(order));
}

export async function updateOrder(orderId : string, data : createOrderData) {
    const theOrder = await Order.findById(orderId);
    if(!theOrder)
        throw Error("Could not find order");

    let updateOrder: {
        status?: string,
        updatedAt?: string
    } = {};
    Object.keys(data).forEach(key => {
        if(key.trim() === "")
            throw Error(`Field name can't be empty`);
        else {
            let fieldName = key.trim().toLowerCase() as ('status');
            let newValue = typeof data[key] === 'string' ? data[key].trim() : data[key];

            if(fieldName === 'status')
                updateOrder.status = newValue;
            else
                console.log(`Cannot update field "${fieldName}"`);
        }
    });

    if(Object.keys(updateOrder).length > 0) {
        updateOrder.updatedAt = new Date().toISOString().slice(0, 23)+"+00:00";
        await Order.findOneAndUpdate({ _id: orderId }, updateOrder);
    }
}

export default Order;