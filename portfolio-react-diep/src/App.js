import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// importing components from react-router-dom packagewe are in v5
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import 'animate.css';
import HomePage from './components/homePage/homePage';
import React, { Component } from 'react';
import PreLoader from './components/preLoader/preLoader';
 
function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>
      <PreLoader/>
    <title>Kathleen Diep | Software Developer</title>
    <meta name="keywords" content="kathleen diep, kathleen, react, javascript" />
    <meta name="description" content="Kathleen Diep | Software Developer" />
    <Lines customLoading={loading} />
    </div>
    </>
  );
}

export default App;
