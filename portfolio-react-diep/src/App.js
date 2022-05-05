import './App.css';
import React from 'react';
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
import LoaderPage from './components/loader/loaderpage';
import NavBar from './components/navBar/navBar';

function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoaderPage/>} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </div>
    </>
  );
}

export default App;