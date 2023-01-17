import { UsersCollection } from "../../db/index.js"
// import jwt  from "../../middleware/helpers/jwt"

/**
 * Authentication class gives access to user login and signup
 */
export class Authentication {

    static async login(req, res){
        const {email, password} = req.body
        console.log(req.body)
         return
        if(!(email && password)) {
            res.status(400).send("All input is required");
        }
        
        const user = await UsersCollection.findOne({ email });

        if (user) return res.status(200).send({ message:"Login successful"});
            // Create token
            const token = jwt.sign(
              { user_id: user._id, email },
              process.env.TOKEN_KEY,
              {
                expiresIn: "2h",
              }
            )

            // save user token
            user.token = token;

      // user
        res.status(200).json(user);
    
         res.status(400).send("Invalid Credentials");
   
  // Our register logic ends here

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