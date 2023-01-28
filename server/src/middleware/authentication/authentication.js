import { Router } from "express";
import { UsersCollection, SchoolsCollection, AccountsCollection } from "../../db/index.js"
// import jwt  from "../../middleware/helpers/jwt"

/**
 * Authentication class gives access to user login and signup
 */
export class Authentication {

    static async login(req, res){
        const {email, password} = req.body
        // console.log(req.body)
        //  return
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



    static async schoolsignup(req, res){
      const { schoolname, email, phone, admin, password} = req.body;

      
      const existingSchool = await SchoolsCollection.findOne({ email: email})

      if(existingSchool) return res.status(400).send({message: "Existing School"});

      const generateRandomval = (schoolname) => {
        let data = '1234567890';
        let rnd = ''
    //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz
        for (let i = 0; i < data.length; i++){
            rnd += data.charAt(Math.floor(Math.random() * data.length));
            if (rnd.length >= 5) {
                return schoolname.substr(0, 1) + rnd;
            }
        }
        }
        
        const school = await SchoolsCollection.create({ 
          schoolname:schoolname,
          email: email,
          admin: admin, 
          phone: phone,
          password: password,
          schoolid:generateRandomval(schoolname)
      })
      if(!school) return res.status(500).send({ message: 'Error creating school'})
      res.status(200).send({ message: 'School created'})
    
  };

  static async schoollogin(req, res){
    const {schoolname, password} = req.body
    // console.log(req.body)
    //  return
    if(!(schoolname && password)) {
        res.status(400).send("All input is required");
    }
    
    const school = await SchoolsCollection.findOne({ schoolname });

    if (schoolname) return res.status(200).send({ message:"Login successful"});
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
    res.status(200).json(school);

     res.status(400).send("Invalid Credentials");

}



static async schooldetails (req, res) {
  const {school_bank_name, school_account_name, school_account_number,term} = req.body;

  const result = await AccountsCollection.findOne({school_account_name})
  if (result) return res.status(400).send({message: 'Exisiting account'});

  const details= await AccountsCollection.create({
    school_bank_name:school_bank_name,
     school_account_name:school_account_name, 
     school_account_number:  school_account_number,
     term: term
  })
  if(!details){
   return res.status(500).send({message: ' Error creating details'})
  }
 return res.status(200).send({message: 'Details created successfully'});
  } catch(err){
    return res.status(500).send({error:error})
  }

  static async updateSchool(req, res,next){
    try{
      const { schoolschema } = req.params;
      const { school_bank_name, school_account_name, school_account_number,term } = req.body;
      const request = await schoolschema. validateAsync({school_bank_name, school_account_name, school_account_number,term });
      const account = await AccountsCollection.findOne({
          _id: schoolschema
      });
  
      // Account does not exist
      if(!account) {
          return next();
        }

        const updatedAccount = await  AccountsCollection.updateMany({
          _id: schoolschema,
          }, {  
          $set: request},
          { upsert: true }
      );

      res.json(updatedAccount);
    } catch(error) {
        next(error);
    }

    }
  }




    
    
  

