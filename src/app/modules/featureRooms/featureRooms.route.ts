import express from "express";
import { FeatureRoomControllers } from "./featureRooms.controller";


const router = express.Router();


router.post("/create-feature-room", FeatureRoomControllers.createFeatureRoom);


router.get("/feature-room", FeatureRoomControllers.getAllFeatureRoom);

router.patch("/feature-room", FeatureRoomControllers.updateFeatureRoom);

export const FeatureRoomRouter = router;