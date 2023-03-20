
import express from "express"
import "dotenv/config"
import cors from "cors"
import axios from "axios"

const AppId = process.env.Id;
const AppKey = process.env.Key;


let app = express()
app.use(cors())
app.get('/recipes/:query',async (req,res)=>{
    const response = await axios.get(
        `https://api.edamam.com/search?q=${req.params.query}&app_id=${AppId}&app_key=${AppKey}`)
        console.log(response.data.hits)
        res.json(response.data.hits)
})
app.listen(3001,()=>{
console.log("listening")
})
