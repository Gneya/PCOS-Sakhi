//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 api key
import { createRequire } from "module";
const require = createRequire(import.meta.url);


const express = require("express");
const bodyParser = require("body-parser")

const app = express();
const ejs = require("ejs");
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());

import { ChatGPTAPI } from 'chatgpt'


app.get("/", function(req,res){
    res.render("chat",{res: []});
})

let res;
let convoArr = [];
const api = new ChatGPTAPI({
    apiKey: "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"
});

let first = true;
app.post("/", async function(req,response){
    
    let query = req.body.query;

    if(first){
        res = await api.sendMessage(query);
        first = false;
    }else{
        res = await api.sendMessage(query, {
            conversationId: res.conversationId,
            parentMessageId: res.id
        })
    }
    convoArr.push(res.text);

    response.render("chat",{res: convoArr});
})

app.listen(3000, function(){
    console.log("server is running on port 3000.......");
});

