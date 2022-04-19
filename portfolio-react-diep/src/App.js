import logo from './logo.svg';
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
import scrollreveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Router>

    <title>Kathleen Diep | Software Developer</title>
    <meta name="keywords" content="kathleen diep, kathleen, react, javascript" />
    <meta name="description" content="Kathleen Diep | Software Developer" />

    </div>
  );
}

export default App;
