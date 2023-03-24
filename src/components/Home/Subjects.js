const Subjects = () => {
    return(
        <div>
            <div className="container-fluid py-5">
        <div className="container pt-5 pb-3">
            <div className="text-center mb-5">
                <h5 className="text-primary text-uppercase mb-3" style={{"letterSpacing": "5px"}}>Subjects</h5>
                <h1>Explore Top Subjects</h1>
            </div>
            <div className="row">
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-1.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Web Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-2.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Development</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-3.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Game Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mb-4">
                    <div className="cat-item position-relative overflow-hidden rounded mb-2">
                        <img className="img-fluid" src="img/cat-4.jpg" alt=""/>
                        <a className="cat-overlay text-white text-decoration-none" href="">
                            <h4 className="text-white font-weight-medium">Apps Design</h4>
                            <span>100 Courses</span>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
        </div>
    )
};

export default Subjects;