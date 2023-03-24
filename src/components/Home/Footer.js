const Footer = () => {
    return(
        <div>
             <div className="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop: "90px"}}>
            <div className="row pt-5">
                <div className="col-lg-7 col-md-12">
                    <div className="row">
                        <div className="col-md-6 mb-5">
                            <h5 className="text-primary text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Get In Touch</h5>
                            <p><i className="fa fa-map-marker-alt mr-2"></i>123 Street, Sofia, Bulgaria</p>
                            <p><i className="fa fa-phone-alt mr-2"></i>+359 2 34567890</p>
                            <p><i className="fa fa-envelope mr-2"></i>info@poodle.com</p>
                            <div className="d-flex justify-content-start mt-4">
                                <a className="btn btn-outline-light btn-square mr-2" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-square mr-2" target="_blank" href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-square mr-2" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a>
                                <a className="btn btn-outline-light btn-square" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            </div>
                        </div>
                        <div className="col-md-6 mb-5">
                            <h5 className="text-primary text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Our Courses</h5>
                            <div className="d-flex flex-column justify-content-start">
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Web Design</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Apps Design</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Marketing</a>
                                <a className="text-white mb-2" href="#"><i className="fa fa-angle-right mr-2"></i>Research</a>
                                <a className="text-white" href="#"><i className="fa fa-angle-right mr-2"></i>SEO</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 mb-5">
                    <h5 className="text-primary text-uppercase mb-4" style={{"letterSpacing": "5px"}}>Newsletter</h5>
                    <p>Sign Up for our weekly newsletter to get latest news on our new Course offerings</p>
                    <div className="w-100">
                        <form asp-controller="Subscription" asp-action="SignUp" method="post" encType="multipart/form-data">                           
                            <div className="input-group">
                                <input type="email" name="email" className="form-control border-light" style={{padding: "30px"}} placeholder="Your Email Address"/>
                                <div className="input-group-append">
                                    <button type="submit" className="btn btn-primary px-4">Sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid bg-dark text-white border-top py-4 px-sm-3 px-md-5" style={{"borderColor": "rgba(256, 256, 256, .1) !important"}}>
            <div className="row">
                <div className="col-lg-6 text-center text-md-left mb-3 mb-md-0">
                    <p className="m-0 text-white">
                        &copy; @DateTime.Now.Year - Copyright Poodle eLearning Platform
                    </p>
                </div>
                <div className="col-lg-6 text-center text-md-right">
                    <ul className="nav d-inline-flex">
                        <li className="nav-item">
                            <a className="nav-link text-white py-0" asp-controller="Home" asp-action="Privacy">Privacy</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white py-0" href="#">Terms</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white py-0" href="#">FAQs</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white py-0" href="#">Help</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    )
};

export default Footer;