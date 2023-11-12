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

UserSchema.statics.createUser = async function(data) {
    const {name, description, picture, isChef, rating, email, phone} = data
    const user: {
        name: string, description?: string, picture?: string, isChef: boolean, rating?: number, email: string, phone: string
    } = {
        name: name,
        isChef: isChef,
        email: email,
        phone: phone
    }

    if (description) 
        user.description = description
    if (rating) 
        user.rating = rating
    if (picture)
        user.picture = picture

    await this.create(user)
}

export default User