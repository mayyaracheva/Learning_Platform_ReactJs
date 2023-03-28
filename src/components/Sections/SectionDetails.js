import { useParams, Link, useLocation } from "react-router-dom";

const SectionDetails = () => {
    const {courseId} = useParams();
    const location = useLocation(); 
    const section = location.state?.data;

    return(
        <div>
<h2>{section && section.title}</h2>
<br />
<p className="margin12">{section && section.content}</p>

<Link to={`/Courses/Details/${courseId}`}>Go Back</Link>
        </div>
    );
};

export default SectionDetails;