import React from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomePage from '../HomePage/HomePage';
import LoginPage from "../LoginPage/LoginPage";
import PersonalArea from '../PersonalArea/PersonalArea';
import RegisterPage from "../RegisterPage/RegisterPage";
import "./App.scss"

function App() {
  return (
    <div className="App">
      <div className="App_container">
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/personalarea" element={<PersonalArea />} />
    </Routes>
    </div>
    </div>
  );
}

export default App;
