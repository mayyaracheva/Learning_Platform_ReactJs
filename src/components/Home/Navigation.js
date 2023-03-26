import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Navigation = () => {

    const { user, userLogged, onLogOutClick } = useContext(AuthContext);
    return (
        <div>
            <div className="container-fluid">
                <div className="row border-top px-xl-5" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <a href="" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                            </a>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                                <div className="navbar-nav py-0">
                                    <NavLink to='/' className="nav-item nav-link active">Home</NavLink>
                                    <NavLink to='/About' className="nav-item nav-link">About</NavLink>
                                    {userLogged &&
                                        <NavLink to="/Courses" className="nav-item nav-link">Courses</NavLink>
                                    }
                                    <NavLink to='/Contact' className="nav-item nav-link">Contact</NavLink>
                                    {!userLogged &&
                                        <NavLink to='/Login' className="nav-item nav-link">Login</NavLink>
                                    }
                                </div>
                                {userLogged ?
                                    <NavLink to='/' className="nav-item nav-link">
                                        <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" onClick={onLogOutClick}>Log Out</button>
                                    </NavLink>
                                    :
                                    <NavLink to='/Register' style={{ textDecoration: 'none' }}>
                                        <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Sign Up</button>
                                    </NavLink>
                                }
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;