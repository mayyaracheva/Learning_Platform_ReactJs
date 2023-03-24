import React from "react";
import Carousel from "./Carousel";
import Courses from "./Courses";
import Subjects from "./Subjects";
import Testimonials from "./Testimonials";

const HomePage = () => {

return(
<div>
<Carousel />
<Courses />
<Subjects />  
{/* <Testimonials /> */}
</div>
    );
};

export default HomePage;