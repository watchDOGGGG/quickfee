import express from 'express'
import {AccessToken, Authentication,Users} from '../middleware/index.js'


export const Routes = express.Router()

Routes.get('/test',async(req,res) =>{
    return res.status(200).send({message:"welcome"})
})


Routes.post("/create/user", Authentication.signup)
Routes.post('/login', Authentication.login)
Routes.get("/getuser/:user", AccessToken.ValidateToken, Users.getUser)