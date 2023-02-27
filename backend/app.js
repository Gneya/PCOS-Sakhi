
import { createRequire } from "module";
const require = createRequire(import.meta.url);


const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

import chatRouter from "./routes/chat-routes.js";


// app.use(cors);
//I don't know why by uncommenting above line server doesn't sends any response :(


app.use(express.json());  //cause we are working with data in form of json object

app.use("/api/chatBot",chatRouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`server is running on ${PORT}.......`);
});

