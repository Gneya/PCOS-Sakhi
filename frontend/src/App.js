import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ChatBot from './pages/ChatBot';
function App() {
  return (
    <>
      <header>
       {/* navbar */}
      </header>
      <main>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>

      </main>
    </>
  );
}

export default App;
