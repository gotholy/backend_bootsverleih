import "dotenv/config"
import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import {router as boatsRouter} from "./boats/router.js"

await mongoose.connect(process.env.MONGODB)

const app = express()

app.use(cors())
app.use(express.json())
app.use("/images", express.static("./images"));
app.use("/api/boats", boatsRouter)

app.listen(process.env.PORT, () => console.log("Server läuft auf:", process.env.PORT))