import { UsersCollection } from "../../db/index.js"
// import jwt  from "../../middleware/helpers/jwt"

/**
 * Authentication class gives access to user login and signup
 */
export class Authentication {

    static async login(req, res){
        const {email, password} = req.body
        
    }

    

    static async signup(req, res){
        const {fullname,email,phone,password} = req.body;
        // console.log(req.body)
        // return

        const existingUser = await UsersCollection.findOne({ email: email})

        if(existingUser) return res.status(400).send({message: "Existing User"});
         
        const user = await UsersCollection.create({ 
            fullname:fullname,
            email: email,
            phone: phone,
            password: password
        })
        if(!user) return res.status(500).send({ message: 'Error creating user'})
        res.status(200).send({ message: 'User created'})
    }

}