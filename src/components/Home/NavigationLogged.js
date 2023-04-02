import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

const NavigationLogged = () => {

    const {user, onLogOutClick} = useContext(AuthContext);
    return (
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
        <div className="navbar-nav py-0">
            <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
            <NavLink to='/About' className="nav-item nav-link">About</NavLink>
            <NavLink to='/Contact' className="nav-item nav-link">Contact</NavLink>
            <NavLink to="/Courses" className="nav-item nav-link">Courses</NavLink>
            <div className="nav-item dropdown">
                <NavLink to="" className="nav-link dropdown-toggle" data-toggle="dropdown">{user.firstName}</NavLink>
                <div className="dropdown-menu rounded-0 m-0">
                    <NavLink to="/" className="dropdown-item">My Profile</NavLink>
                    <button onClick={onLogOutClick} className="dropdown-item">Log out</button>
                </div>
            </div>
            <div>
                <img className="rounded-circle z-depth-0" alt="" src={user.image.imageUrl} height="65" />
            </div>
        </div>
        </div>
    );
};

export default NavigationLogged;