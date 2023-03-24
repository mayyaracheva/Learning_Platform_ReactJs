const Contact = () => {
    return(
        <div>
<div className="container-fluid bg-registration py-5" style={{"margin": "90px 0;"}}>
    <div className="container py-5">
        <div className="row align-items-center">
            <div className="col-lg-7 mb-5 mb-lg-0">
                
                    <div className="font-weight-semi-bold mb-1 text-white text-uppercase">meet us in person</div>
                    <a className="py-2 text-white" ><i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>123 Str, Sofia, Bulgaria</a>
                    <hr />
                    <div className="font-weight-semi-bold mb-1 text-white text-uppercase">direct contact</div>
                    <a className="py-2 text-white"><i className="fa fa-2x fa-envelope text-primary mr-3"></i>info@Poodle.com</a>
                    <br />
                    <a className="py-2 text-white"><i className="fa fa-2x fa-phone text-primary mr-3"></i>+359 2 3456789</a>
                <hr />
                <hr />
                <div className="mb-4">
                    <h5 className="text-primary text-uppercase mb-3" style={{"letterSpacing": "5px"}}>Need More Information</h5>
                    <h1 className="text-white">We Are Always Here For You</h1>
                </div>
                <p className="text-white">
                    What you get when asking your question
                </p>
                <ul className="list-inline text-white m-0">
                    <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Less than 12-hour response to your question</li>
                    <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Thoroughness and expertise of a Certified Exchange Specialist</li>
                    <li className="py-2"><i className="fa fa-check text-primary mr-3"></i>Plan of action summarized in an email follow up</li>
                </ul>
            </div>
            <div className="col-lg-5">
                <div className="card border-0">
                    <div className="card-header bg-light text-center p-4">
                        <h1 className="m-0">Contact Us</h1>                       
                    </div>
                    <div className="card-body rounded-bottom bg-primary p-5">
                        <form >
                            <div className="form-group">
                                <input type="text" name="name" className="form-control border-0 p-4" placeholder="Your name" required="required" />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="phone" className="form-control border-0 p-4" placeholder="Your phone number" required="required" />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <input type="email" name="email" className="form-control border-0 p-4" placeholder="Your email" required="required" />
                                <span className="text-danger"></span>
                            </div>
                            <div className="form-group">
                                <input type="text" name="subject" className="form-control border-0 p-4" placeholder="Subject" required="required" />
                                <span className="text-danger" ></span>
                            </div>
                            <div className="form-group">
                                <textarea cols="20" rows="5" name="content" className="form-control border-0 p-4" placeholder="Your message" required="required"></textarea>
                                <span className="text-danger" ></span>
                            </div>
                            <div>
                                <button className="btn btn-dark btn-block border-0 py-3" type="submit">Send Mail</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    )
};

export default Contact;