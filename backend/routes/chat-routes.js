// const express = require("express");
import express from "express";
const chatRouter = express.Router();

//importing functions from controller
import { getWelcomeMessage, getReply } from "../controllers/chatBot-controllers.js";

chatRouter.get("/", getWelcomeMessage); 
chatRouter.post("/ask", getReply); 

export default chatRouter;