import { NavLink, useParams, Link } from "react-router-dom";
import CoursesService from "../services/ApiCoursesService";
import {useState, useEffect} from 'react';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const CourseDetails = () => {

    const {id} = useParams();
    const[course, setCourse] = useState([]);
    const currentUserRole = "Teacher";
    const {user} = useContext(AuthContext);

    useEffect(() => {
        if(id){
            CoursesService.getCourseById(id, user.email, user.password).then(data => {               
                setCourse(data);
            }).catch(error => {
                alert(error);
            })
        } else {
            alert('Missing parameter id');
        }
    }, [id, user.email, user.password])

    const onSectionDelete = () => {
//to be implemented
    }
    return(
        <div>
<h2>{course && course.title}</h2>
<h6 className="margin12">Category:</h6> {course && course.category && course.category.name}
<h6 className="margin12">Description:</h6> {course && course.description}
<h4>Sections</h4>

{course && 
    <NavLink className="btn btn-primary float-right" to={`/Section/CreateSection/${course.id}`}>Add new Section</NavLink>
}

{course && course.category && course.category.name === "Private" &&
<NavLink className="btn bg-dark text-white float-right" to={`/Courses/Enroll/${course.id}`}>Enroll Students</NavLink>
}

{course && course.sections && course.sections.map(section => 
    <dl align="left" key={section.id}>
                <dt>
                    {currentUserRole === "Teacher" ?
                    <Link to={`/Section/Details/${course.id}/${section.id}`} state={{data: section}}>{section.title}</Link>
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
    <li key={`Enroll:${user.firstName}${user.lastName}`} className="margin12">{user.firstName} {user.lastName}</li>
    ) 
    }
</ul>

<NavLink className="btn btn-primary float-left" to={`/Courses`}>Go Back to Courses</NavLink>
        </div>
    )
};

export default CourseDetails;