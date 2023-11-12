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

    return (await this.create(user));
}

UserSchema.statics.updateUser = async function (userId, data) {
    const theUser = await this.findById(userId);
    if(!theUser)
        throw Error("Could not find user");

    let updateObject: {
        name?: string,
        description?: string,
        picture?: string,
        isChef?: string,
        rating?: number,
        phone?: string,
        updatedAt?: string
    } = {};
    Object.keys(data).forEach(key => {
        if(key.trim() === "")
            throw Error(`Field name can't be empty`);
        else {
            let fieldName = key.trim().toLowerCase() as ('name' | 'description' | 'picture' | 'isChef' | 'rating' | 'phone');
            let newValue = typeof data[key] === 'string' ? data[key].trim() : data[key];

            if(fieldName === 'name')
                updateObject.name = newValue;
            else if (fieldName === 'description')
                updateObject.description = newValue;
            else
                console.log(`Cannot update field "${fieldName}"`);
        }
    });

    if(Object.keys(updateObject).length > 0) {
        updateObject.updatedAt = new Date().toISOString().slice(0, 23)+"+00:00";
        await this.findOneAndUpdate({ _id: userId }, updateObject);
    }
}

export default User