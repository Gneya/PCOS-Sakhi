
import { createRequire } from "module";
const require = createRequire(import.meta.url);


const express = require("express");


const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
import chatRouter from "./routes/chat-routes.js";


app.use("/api/chatBot",chatRouter); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log(`server is running on ${PORT}.......`);
});

