import express from "express";
import { getAllBoats, addBoat, getOneBoat, deleteOneBoat, editBoat } from "./controller.js";

export const router = new express.Router();


router.post("/", addBoat);
router.get("/", getAllBoats);
router.get("/:id", getOneBoat)
router.delete("/:id", deleteOneBoat)
router.put("/:id", editBoat)

