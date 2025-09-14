const mongoose = require('mongoose');
const validator = require('validator');

const contactSchema =  mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 20,
        },
        lastName: {
            type: String,
            required: true,
            trim: true,
            minLength: 3,
            maxLength: 20
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            validate(value) {
                if (!validator.isEmail(value)) {
                    throw new Error("Invalid Email Address");
                }
            },
        },
        phone: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },

    }
);

module.exports = mongoose.model("Contact", contactSchema);