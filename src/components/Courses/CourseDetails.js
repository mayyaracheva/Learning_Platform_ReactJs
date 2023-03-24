import { NavLink, useParams, Link } from "react-router-dom";
import CoursesService from "../services/ApiCoursesService";
import {useState, useEffect} from 'react';

const CourseDetails = () => {

    const {id} = useParams();
    const[course, setCourse] = useState([]);
    const currentUserRole = "Teacher";

    useEffect(() => {
        if(id){
            CoursesService.getCourseById(id).then(data => {
                console.log("coursebyId", data);
                setCourse(data);
            }).catch(error => {
                alert(error);
            })
        } else {
            alert('Missing parameter id');
        }
    }, [id])

    const onSectionDelete = () => {

    }
    return(
        <div>
<h2>{course && course.title}</h2>
<h6 className="margin12">Category:</h6>
<h6 className="margin12">Description:</h6> {course && course.description}
<h4>Sections</h4>

{course && 
    <NavLink className="btn btn-primary float-right" to={`/Section/CreateSection/${course.id}`}>Add new Section</NavLink>
}

{course && course.sections && course.sections.map(section => 
    <dl align="left" key={section.id}>
                <dt>
                    {currentUserRole === "Teacher" ?
                    <Link to={`/Section/Details/${course.id}/${section.id}`}>{section.title}</Link>
                    :
                    <p>{section.title}</p>
                   }
                </dt>
                <dt>
                    <span>
                        <NavLink style={{color: "black"}} to={`/Section/Edit/${section.id}`} className="badge rounded-pill bg-secondary">Edit</NavLink>
                   </span>
                </dt>
    </dl>
)
}

<h4>Students</h4>
<ul>
    {course && course.users && course.users.map(user => 
    <li className="margin12">{user.FirstName} {user.LastName}</li>
    ) 
    }
</ul>
        </div>
    )
};

export default CourseDetails;