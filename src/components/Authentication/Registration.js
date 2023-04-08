import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/ApiUserService";

const initialValues = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    ImageUrl: ""
}

const Registration = () => {

    const navigate = useNavigate();
    const [newUser, setNewUser] = useState(initialValues);   

    const handleRegisterFormInput = (e) => {
        const { name, value, files } = e.target;
        if(name === "ImageUrl") {           
            let imageURI = URL.createObjectURL(files[0]);
            setNewUser(user => ({ ...user, [name]: imageURI }));   
        } else {
            setNewUser(user => ({ ...user, [name]: value }));    
        }          
    }

    const onRegisterFormSubmit = (e) => {
        e.preventDefault();
        UserService.registerUser(newUser)
            .then(() => {
                navigate('/Login');
            }
            )
            .catch(error => alert(error));
    }

    return (
        <div>
            <h2>Register</h2>
            <div className="row">
                <br />
                <form onSubmit={onRegisterFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="FirstName">First Name</label>
                        <input 
                        type="text" 
                        htmlFor="FirstName" 
                        className="form-control" 
                        name="FirstName"
                        onChange={(e) => handleRegisterFormInput(e)}
                        value={newUser.FirstName}
                        required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="LastName">Last Name</label>
                        <input 
                        type="text" 
                        htmlFor="LastName" 
                        className="form-control" 
                        name="LastName"
                        onChange={(e) => handleRegisterFormInput(e)} 
                        value={newUser.LastName}
                        required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input 
                        type="email" 
                        htmlFor="Email" 
                        name="Email"
                        className="form-control" 
                        onChange={(e) => handleRegisterFormInput(e)} 
                        value={newUser.Email}
                        required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="Password">Password</label>
                        <input 
                        htmlFor="Password" 
                        type="password" 
                        className="form-control" 
                        onChange={(e) => handleRegisterFormInput(e)}
                        name="Password"
                        value={newUser.Password}
                        required />
                    </div>
                    <div className="text-danger"></div>
                    <div className="form-group">
                        <label htmlFor="ImageFile" className="control-label">Image</label>
                        <div className="custom-file">
                            <input 
                            htmlFor="ImageFile" 
                            type="file"
                            className="custom-file-input" 
                            id="customFile" 
                            name="ImageUrl"
                            value={""}
                            onChange={(e) => handleRegisterFormInput(e)}/>
                            <label className="custom-file-label" htmlFor="customFile">Choose File</label>
                        </div>
                    </div>


                    <div className="form-group">
                        <br />
                        <button className="btn-primary">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Registration;