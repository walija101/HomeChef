import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    
}, { collection: 'Users', timestamps: true });

const User = models.User || model('User', UserSchema);

export default User;