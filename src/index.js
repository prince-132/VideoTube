// require('ditenv').config({path: './env'})
import dotenv from "dotenv"

import connectionDB  from "./db/index.js"

dotenv.config({
    path: "./.env"
})


connectionDB()




/*
import express from "express"
const app = express()

// function connectDB() {}
// connectDB()

// ifee -> to call the above function
// We use async wait coz for accessing data from DB takes time
( async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // handling express error
        app.on("error", (error) => {
            console.error("Express error: ", error)
        })

        app.listen(process.env.PORT, () => {
            console.log(`App is listoning on port ${process.env.PORT}`);
        })
    }
    catch(error){
        console.error("Error: ", error)
        throw error
    }
})()
*/