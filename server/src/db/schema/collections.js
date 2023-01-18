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



//School collection
const school = new mongoose.Schema({
    schoolname:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    },
    admin:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    schoolid:{
        type: String,
        required:true
    },
    isverified:{
        type: String,
        enum: ['PENDING', 'VERIFIED', 'REJECTED'], 
        default: 'PENDING'
    }
})

export const SchoolsCollection = mongoose.model("schools", school)

