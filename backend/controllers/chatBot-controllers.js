import { ChatGPTAPI } from "chatgpt";
// const dotenv = require("dotenv");
import dotenv from "dotenv";
dotenv.config();
var response ;
var convoArr = [];
var first = true;

//authentication of chatGpt api
const api = new ChatGPTAPI({
    apiKey: process.env.OPENAI_API_KEY
});


//function just for testing 
export const getWelcomeMessage = async(req,res,next) => {
    try{
        response = await api.sendMessage("hi how are you?");

    }catch(err){
        return res.status(500).json({message: err.message});
    }
    convoArr.push(response.text);
    return res.status(200).json({message: "hello from chatbot", gptReply: response.text});
} 


//function to get reply from chatgpt
export const getReply = async(req,res,next) => {
    const { query } = req.body; //query = question from user
    try{
        if(first){
            response = await api.sendMessage(query);
            first = false;
        }else{
            response = await api.sendMessage(query, {
                conversationId: response.conversationId,
                parentMessageId: response.id
            })
        }
    }catch(err){ 
        return res.status(500).json({message: err.message}); //if we got error
    }
    console.log(query);

    //adding reply from chatgpt into our conversation array(convoArr)
    convoArr.push(response.text);
    
    //returning array of converstion
    return res.status(200).json({message: "reply by chatgpt",convoArr: convoArr});
}





