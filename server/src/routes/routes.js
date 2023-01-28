import express from 'express'
import {AccessToken, Authentication,Users,Schools} from '../middleware/index.js'


export const Routes = express.Router()

Routes.get('/test',async(req,res) =>{
    return res.status(200).send({message:"welcome"})
})


Routes.post("/create/school", Authentication.schoolsignup)
Routes.post("/school-login", Authentication.schoollogin)
Routes.post("/create/user", Authentication.signup)
Routes.post('/login', Authentication.login)
Routes.post('/create/details', Authentication. schooldetails)
Routes.put('/update/:schoolschema', Authentication.updateSchool)
Routes.get("/getuser/:user", AccessToken.ValidateToken, Users.getUser)
Routes.get('/getschools', Schools.getSchools )
Routes.get('/getschool/:school',Schools.getSchool)