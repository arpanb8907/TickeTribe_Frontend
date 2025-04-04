import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";

function App() {
  return (
    <Router>
      <Navbar />
     
        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
      

      <Footer/>
    </Router>
  );
}

export default App;
