import mongoose from 'mongoose';

const Joi = require('joi');

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
        .required()
})

export const AccountsCollection = mongoose.model("details", schoolschema)