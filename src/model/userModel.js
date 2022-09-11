const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId


const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            max: 50,
            unique: true,
        },
        password: {
            type: String,
            required: true,
            min: 6,
        },
        profilePicture: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
        followers: {
            
            type: Number,
            
        },
        followings: {
           
            type: Number
          
        },
        isAdmin: {
            type: Boolean,
            default: false,
        },
        desc: {
            type: String,
            max: 50,
        },
        city: {
            type: String,
            max: 50,
        },
        from: {
            type: String,
            max: 50,
        },
        relationship: {
            type: String,
            enum: ["Single", "complicated", "married"],
        },
        isDeleted: {
            type: Boolean,
            default: false

        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);