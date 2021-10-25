import React from 'react';
import "./pages/Home"
import { BrowserRouter } from "react-router-dom";
import { Routes } from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
  
  );
}

export default App;
