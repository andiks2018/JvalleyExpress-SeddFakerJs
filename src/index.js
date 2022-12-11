import express from 'express'
import dotenv from 'dotenv'
import user_routes from './routes/user_routes'
dotenv.config()

const {PORT} =process.env
const app = express()

//middleware
app.use(express.json())

//buat route
app.use(user_routes)
// app.get("/api/users", (req, res)=>{
//     res.send("berhasil konek...")
// })

//listener
app.listen(PORT, ()=>{
    console.info("server berhasil dijalankan...")
})