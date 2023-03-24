const Testimonials = () => {
 return(
    <div>
        <div className="container-fluid py-5">
    <div className="container py-5">
        <div className="text-center mb-5">
            <h5 className="text-primary text-uppercase mb-3" style={{"letterSpacing": "5px"}}>Testimonial</h5>
            <h1>What Say Our Students</h1>
        </div>
        <div className="row justify-content-center">
            <div className="col-lg-8">
                <div className="owl-carousel testimonial-carousel">
                    <div className="text-center">
                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                        <h4 className="font-weight-normal mb-4">Poodle platform is a great starting point for anyone who wants to jumpstart a career in IT industry.It provided me with the underlying knowledge and practical experience needed to join the sector.</h4>
                        <img className="img-fluid mx-auto mb-3" src="img/testimonial-1.jpg" alt=""/>
                        <h5 className="m-0">Kalin Markov</h5>
                        <span>Junior Full-Stack Developer</span>
                    </div>
                    <div className="text-center">
                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                        <h4 className="font-weight-normal mb-4">Some of my best junior engineers come from Poodle. It is always a pleasure to work with their alumni.</h4>
                        <img className="img-fluid mx-auto mb-3" src="img/testimonial-2.jpg" alt=""/>
                        <h5 className="m-0">Alexandra Popova</h5>
                        <span>Site Engineering Lead</span>
                    </div>
                    <div className="text-center">
                        <i className="fa fa-3x fa-quote-left text-primary mb-4"></i>
                        <h4 className="font-weight-normal mb-4">We partner with Poodle because we know their graduates have gone through an extremely demanding program - with high training standards and practice.</h4>
                        <img className="img-fluid mx-auto mb-3" src="img/testimonial-3.jpg" alt=""/>
                        <h5 className="m-0">Ivan Rusev</h5>
                        <span>Head of Software Development</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </div>
    )
};
export default Testimonials;