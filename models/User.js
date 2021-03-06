import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Please provide name'], minlength: 3, maxlength: 30, trim: true },
    email: {
        type: String,
        required: [true, 'Please provide email'],
        validate: {
            validator: validator.isEmail,
            message: 'Please provide a valid email'
        },
        unique: true
    },
    password: { type: String, required: [true, 'Please provide password'], minlength: 6, maxlength: 30 },
    lastName: { type: String, maxlength: 20, trim: true, default: 'lastName' },
    location: { type: String, maxlength: 20, trim: true, default: 'My City' }
});

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10);
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, salt);
    console.log(this.password);
});

export default mongoose.model('User', UserSchema);
