import mongoose from "mongoose";

const boatSchema = new mongoose.Schema({
    boatname: String,
    boattype: String,
    material: String,
    year: Number,
})

export const BoatModel= mongoose.model("boats", boatSchema)