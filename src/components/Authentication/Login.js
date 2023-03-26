import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

const Login = () => {

    const {onLoginFormSubmit, user, handleLoginFormInput, userLogged} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if(userLogged) {
            navigate("/");
        }
    },[userLogged])

    function showPassword() {
        var x = document.getElementById("Password");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    }
    
    return(
        <div>
             <h2>Login</h2>
    <div className="row">
        <form onSubmit={onLoginFormSubmit}>          
            <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input 
                type="email" 
                id="email" 
                name="Email" 
                value={user.Email}
                onChange={(e) => handleLoginFormInput(e)} 
                className="form-control" />                
            </div>
            <div className="form-group">
                <label htmlFor="Password">Password</label>
                <input 
                type="password" 
                id="Password" 
                name= "Password" 
                value={user.Password} 
                onChange={(e) => handleLoginFormInput(e)}
                className="form-control" />
            </div>
            <div className="form-group">
                <input type="checkbox" onClick={showPassword} />Show Password               
            </div>
            <div className="form-group">
                <br />               
                <button className="btn-primary">Submit</button>
            </div>
        </form>
    </div>
        </div>
    )
};

export default Login;