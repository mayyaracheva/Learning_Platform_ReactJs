import { NavLink } from "react-router-dom";

const NavigationNotLogged = () => {
  
    return (
        <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav py-0">
                <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                <NavLink to='/About' className="nav-item nav-link">About</NavLink>
                <NavLink to='/Contact' className="nav-item nav-link">Contact</NavLink>
                <NavLink to='/Login' className="nav-item nav-link">Login</NavLink>
            </div>
            <NavLink to='/Register' style={{ textDecoration: 'none' }}>
                <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Sign Up</button>
            </NavLink>
        </div>
    );
};

export default NavigationNotLogged;