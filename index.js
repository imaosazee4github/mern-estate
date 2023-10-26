import express from 'express'
import db from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

process.env.MONGODB_URI 

const port = 5000

app.listen(port, () => console.log('Server running on port 3000'))