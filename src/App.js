import React from "react";
import "./App.css";
import Header from "./Header";
import Login from './login';
import Register from './register'
import TinderCards from './TinderCards'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header/>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Routes>
          <Route path="/register" element={<Register/>} />
        </Routes>
      
      </Router>
      <TinderCards/>

      {/* <Header/> */}
    </div>
  );
}

export default App;
