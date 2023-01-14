import { UsersCollection } from "../../db/index.js"

/**
 * Authentication class gives access to user login and signup
 */
export class Authentication {

    static async login(req, res){
        const {email, password} = req.body
        
    }

    static async signup(req, res){
        const {fullname, email, phone, password} = req.body
 
        const CreateUser = await UsersCollection.create({})

    }

}