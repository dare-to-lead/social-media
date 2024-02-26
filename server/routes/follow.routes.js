import express from "express";
import { checkFollow, followToggle } from "../controller/follow.controller.js";

const followRouter = express.Router();


followRouter.post("/check/:followingId", checkFollow)
followRouter.put("/:followingId", followToggle);

export default followRouter;
