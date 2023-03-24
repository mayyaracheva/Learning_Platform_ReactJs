import React from "react";
import { NavLink, BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "../../router/RoutesComponent";
import TopBar from "../Home/TopBar";
import Navigation from "../Home/Navigation";
import Footer from "../Home/Footer";
import './App.css';

function App() {
  return (    
    <div className='container'>
    <Router>
      <TopBar />  
      <Navigation />  
      <RoutesComponent />
      <Footer />
      <a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </Router>
    </div>
  );
}

export default App;
