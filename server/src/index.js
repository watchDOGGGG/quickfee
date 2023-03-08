import express from 'express'
import { Routes } from './routes/index.js'
import {Db_connection} from './db/index.js'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
Db_connection()
const app = express()
app.use(cors())
app.use(express())
app.use(express.json())
app.use('/v1/api', Routes)

  

const port  = process.env.port || 1200
app.listen(port, () =>{
    console.log('listening on port '+ port)
})