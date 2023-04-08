import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useState } from "react";
import UserService from "../services/ApiUserService";
import RoutesComponent from "../../router/RoutesComponent";
import TopBar from "../Home/TopBar";
import Navigation from "../Home/Navigation";
import Footer from "../Home/Footer";
import './App.css';

function App() {
  
   const[user, setUser] = useState({Email: "", Password: ""});
   const [userLogged, setUserLogged] = useState(false);

  const handleLoginFormInput = (e) => {
    const { name, value } = e.target;    
    setUser(user => ({ ...user, [name]: value }));   
  }

  const onLoginFormSubmit = (e) => {  
    e.preventDefault();
    UserService.loginUser(user)
    .then(response => {
      setUser(response); 
      setUserLogged(true);     
      console.log('user from api', response);      
    })
    .catch(error => alert(error));
}

const onLogOutClick = () => {
setUserLogged(false);
setUser({Email: "", Password: ""})
}

  return (    
    <div className='container'>
    <Router>
      <TopBar />  
      <AuthContext.Provider value={{onLoginFormSubmit, user, handleLoginFormInput, userLogged, onLogOutClick }}>
      <Navigation />
      <RoutesComponent />
      </AuthContext.Provider>
      <Footer />
      <a className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-angle-double-up"></i></a>
    </Router>
    </div>
  );
}

export default App;
