import mongoose from "mongoose";
const Joi = require('joi');

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


const schoolschema= Joi.object({
    school_bank_name: Joi.string() 
        .min(3)
        .max(30)
        .required(),
    school_account_name: Joi.string()
        .min(3)
        .max(30)
        .required(),
    school_account_number: Joi.string()
        .integer()
        .min(3)
        .max(30)
        .required(),
    process:{
        type:String,
        enum:['CLOSE', 'ACTIVE'],
        default:'CLOSE'
    }

})

export const AccountsCollection = mongoose.model("details", schoolschema)

