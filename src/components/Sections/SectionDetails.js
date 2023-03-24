import { useParams, Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import CoursesService from "../services/ApiCoursesService";

const SectionDetails = () => {
    const {courseId, sectionId} = useParams();
    const {section, setSection} = useState({});
    //const email = "Ragnar.Lodbrock@abv.com";
    //const password = "adminADMIN123?";

    useEffect(() => {
        CoursesService.getAllCourseSections(courseId)
        .then(data => {
            setSection(section => data.filter(s => s.Id === sectionId))
        })
    },[courseId, sectionId, setSection])

    return(
        <div>
<h2>{section.Title}</h2>
<br />
<p class="margin12">{section.Content}</p>

<Link to={`/Courses/Details/${courseId}`}>Go Back</Link>
        </div>
    );
};

export default SectionDetails;