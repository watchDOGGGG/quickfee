import mongoose from "mongoose";
import Joi from'joi';
const ObjectID = mongoose.Types.ObjectId

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
    },
    password:{
        type: String,
        required:true
    },
    schoolid:{
        type: String,
        required:true
    },
    info:{
        type:String
    },
    isverified:{
        type: String,
        enum: ['PENDING', 'VERIFIED', 'REJECTED'], 
        default: 'PENDING'
    }
})

export const SchoolsCollection = mongoose.model("schools", school)


const schoolInfo= new mongoose.Schema({
    school:{
        type: ObjectID,
        ref:'schools',
        required:true
    },
    account_num:{
        type:Number,
        required:true
    },
    bank_name:{
        type:String,
        required:true
    },

    account_name:{
        type:String,
        required:true
    },
    session:{
        type:String,
    }
})

export const AccountsCollection = mongoose.model("school_info", schoolInfo)

// When naming a service with payment its good to give it a name with payment e.g paymentINFO

//Joi.object