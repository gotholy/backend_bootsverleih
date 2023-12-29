import mongoose from "mongoose";
import { BoatModel } from "./model.js";
const { ObjectId } = mongoose.Types;



export async function addBoat(req,res){
    try{
        const boat = new BoatModel(req.body);
        await boat.save();
        console.log("added one", boat);
        await boat.save()
        res.end()
    }catch(error){
console.error("Error in addBoat", error)
res.status(500).send("Interner Server Error von addBoat", error)
    }
}

export async function getAllBoats(req, res){
    try {
        const boats = await BoatModel.find();
        console.log("Alle boote im Hafen", boats);
        res.json(boats);
    }catch(error){
        console.error("Fehler in getAllBoats", error);
        res.status(500).send("Server Error in getAll");
    }
}
export async function getOneBoat(req, res){
    try {
        const {id}= req.params
        const boat = await BoatModel.findOne({_id:id})
        console.log("aus getOneBoat", boat);
        res.json(boat)
    }catch(error){
        console.error("Fehler in getOneBoat", error);
        res.status(500).send("Server Error in getOne");
    }
}
 
export async function deleteOneBoat(req, res) {
    try {
      const { id } = req.params;
      const objectId = new mongoose.Types.ObjectId(id);
      const deleteResult = await BoatModel.deleteOne({ _id: objectId });
      res.json({ message: "Boat deleted successfully", deleteResult });
    } catch (error) {
      console.error("Fehler in deleteOneBoat", error);
      res.status(500).json({ error: "Serverfehler in deleteOneBoat", details: error.message });
    }
  }
 
export async function editBoat(req, res) {
    try{
        const {id} = req.params;
        const objectId = new mongoose.Types.ObjectId(id);
        const editedResult = await BoatModel.updateOne({_id: objectId }, req.body)
        res.json({message: "Boat edited Succesfully", editedResult})
    }catch(error){
        console.log("Fehler in editBoat", error);
        res.status(500).send("Server Error in editBoat")
    }
}
