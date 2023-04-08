import { Link, useParams, useNavigate} from "react-router-dom";
import CoursesService from "../services/ApiCoursesService";
import { useState, useEffect } from 'react';
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const StudentCourseDetails = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [course, setCourse] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (id) {
            CoursesService.getCourseDetails(id, user.email, user.password).then(data => {               
                setCourse(data);
            }).catch(error => {
                alert(error);
            })
        } else {
            alert('Missing parameter id');
        }
    }, [id, user.email, user.password])

    const onUnenrollClick = () => {
        CoursesService.unenroll(course.courseId, user.email, user.password).then(data => {   
            alert(data);        
            navigate('/Courses');
        }).catch(error => {
            alert(error);
        })
    }
    return (
        <div>
            <h2>{course.title}</h2>
            <br />
            <p className="margin12"><h6>Description:</h6>{course.sanitizedContent}</p>

            <h4>Sections</h4>
            {course && course.sections && course.sections.map(s =>
                <dl align="left" key={s.id}>
                    <dt>
                        <Link to={`/Section/Details/${course.courseId}/${s.id}`} state={{data: s}}>{s.title}</Link>
                    </dt>
                </dl>
            )}
            <button className="btn bg-dark text-white float-right" onClick={onUnenrollClick} >Unenroll</button>
        </div>
    )
};

export default StudentCourseDetails;