import {NavLink } from "react-router-dom";

const TopBar = () => {
    
    return (
        <div>
            <div className="container-fluid d-none d-lg-block">
                <div className="row align-items-center py-4 px-xl-5">
                    <div className="col-lg-3">                       
                            <NavLink to='/' style={{textDecoration: 'none'}}>
                                <h1 className="m-0"><span className="text-primary">E</span>COURSES</h1>
                            </NavLink>                       
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                            <div className="text-left">
                                <NavLink to='/Contact' style={{ textDecoration: 'none' }}>
                                    <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                            <div className="text-left">
                                <NavLink to='/Contact' style={{ textDecoration: 'none' }}>
                                    <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 text-right">
                        <div className="d-inline-flex align-items-center">
                            <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                            <div className="text-left">
                                <NavLink to='/Contact' style={{ textDecoration: 'none' }}>
                                    <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopBar;