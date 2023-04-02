import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import NavigationLogged from "./NavigationLogged";
import NavigationNotLogged from "./NavigationNotLogged";

const Navigation = () => {

    const {userLogged} = useContext(AuthContext);
    return (
        <div>
            <div className="container-fluid">
                <div className="row border-top px-xl-5" style={{ alignItems: 'center', justifyContent: 'center' }}>
                    <div className="col-lg-9">
                        <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                            <NavLink to="/" className="text-decoration-none d-block d-lg-none">
                                <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                            </NavLink>
                            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {userLogged ?
                                <NavigationLogged />
                                :
                                <NavigationNotLogged />
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;