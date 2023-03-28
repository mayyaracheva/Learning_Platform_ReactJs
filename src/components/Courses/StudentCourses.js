import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import CoursesService from "../services/ApiCoursesService";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const StudentCourses = () => {

    const [studentCourses, setStudentCourses] = useState([]);
    const { user } = useContext(AuthContext);


    useEffect(() => {
        CoursesService.getAllCourses(user.email, user.password)
            .then(data => {
                console.log("allcourses", data);
                setStudentCourses(data);
            })
            .catch(error => {
                alert(error);
            })
    }, [user.email, user.password])

    return (
        <div>
            <div className="container-fluid py-5">
                <div className="container py-5">
                    <div className="text-center mb-5">
                        <h3 className="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>My Courses</h3>
                    </div>
                    <div className="row">
                        {studentCourses && studentCourses.map(course =>
                            <div className="col-lg-4 col-md-6 mb-4" key={course.courseId}>
                                <div className="rounded overflow-hidden mb-2">
                                    <img className="img-fluid" src={course.photoURL} alt="" />
                                    <div className="bg-secondary p-4">
                                        <div className="d-flex justify-content-between mb-3">
                                            <small className="m-0"><i className="fa fa-users text-primary mr-2"></i>{course.usersCount}</small>
                                            <small className="m-0"><i className="far fa-clock text-primary mr-2"></i>01h 30m</small>
                                        </div>
                                        <NavLink className="h5" to={`/Courses/Details/${course.courseId}`}>{course.title}</NavLink>
                                        <div className="border-top mt-4 pt-4">
                                            <div className="d-flex justify-content-between">
                                                <p className="h6">{course.shortDescription}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default StudentCourses;