import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    picture: {
        type: String,
        required: false
    },
    isChef: {
        type: Boolean,
        required: true
    },
    rating: {
        type: Number,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }
}, { collection: 'Users', timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;

UserSchema.statics.createUser = async function(data) {
    const {name, description, picture, isChef, rating, email, phone} = data
    const user = {
        name: name,
        description,
        picture,
        isChef: isChef,
        rating,
        email: email,
        phone: phone
    }

    if (rating) {
        
    }

    await this.create(user)
}