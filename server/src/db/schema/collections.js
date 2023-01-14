import mongoose from "mongoose";

// users collection
const user = new mongoose.Schema({
    fullname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
})

export const UsersCollection = mongoose.model("users", user)
