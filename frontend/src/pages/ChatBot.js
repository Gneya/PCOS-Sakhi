import React, { useState } from 'react';
import axios from "axios";


const ChatBot = () => {
    const [query, setQuery] = useState("");
    const [chatArr, setChatArr] = useState([]);
    console.log(query);
    const getReply = (e) =>{
        e.preventDefault();

        //sending axios request to backend server
        //note that you need to start server first and server port number and frontend port number should be different 
        axios.post('http://localhost:5000/api/chatbot/ask', {query})
                .then((res) => {
                    console.log(res.data); //response from backend server
                    const reply = res.data.reply;
                    setChatArr((prev) => 
                        [...prev, {
                            question: query,
                            reply: reply
                        }]
                    );
                    console.log(chatArr)
                }).catch((error) => {
                    console.log(error);
                });
        setQuery("");
    }
  return (

    <>  
        {
            chatArr.map(chat => (
                <div>
                    <p>Question: {chat.question}</p>
                    <p>Reply: {chat.reply}</p>
                </div>
            ))
        }

        <form onSubmit={getReply}>
            <input type="text" placeholder='Write your question...' value={query} onChange={(e) => setQuery(e.target.value)}/>
            <button>Send</button>
        </form>
    </>
  )
}

export default ChatBot;