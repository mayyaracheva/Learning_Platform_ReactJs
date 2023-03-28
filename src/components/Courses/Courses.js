import {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CoursesService from "../services/ApiCoursesService";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';

const Courses = () => {

const[courses, setCourses] = useState([]);
const[courseDeleted, setCourseDeleted] = useState(false);
const {user} = useContext(AuthContext);


useEffect(() => {
    CoursesService.getAllCourses(user.email, user.password)
    .then(data => {
        console.log("allcourses", data);
        setCourses(data);
    })
    .catch(error => {
        alert(error);
    })
},[courseDeleted, user.email, user.password])

const deleteCourse = (courseId) => {
    CoursesService.deleteCourse(courseId, user.email, user.password)
    .then(data => {
      console.log(data);
      setCourseDeleted(true);     
  })
  .catch(error => {
      alert(error);
  })

  }

    return(
        <div>
<div className="container-fluid py-5">
    <div className="container py-5">
        <div className="text-center mb-5">
            <h3 className="text-primary text-uppercase mb-3" style={{"letterSpacing": "5px"}}>All Courses</h3>
            <NavLink className="btn bg-dark text-white" to={`/Courses/Create`}>Create a new course</NavLink>
        </div>

        <form asp-controller="Courses" asp-action="Index" method="get" className="form-inline">
            Find course by title:
            <input type="text" className="form-control" name="Title" />
            <input type="submit" value="Search" className="btn btn-primary" />
        </form>

        <Table className="table table-hover">
            <thead className="bg-dark text-white">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {courses && courses.map((c, index) => 
                    <tr key={c.id}>
                            <td>{index + 1}</td>
                            <td><Link to={`/Courses/Details/${c.courseId}`}>{c.title}</Link></td>
                            <td>{c.description}</td>
                            <td>                            
                                <div className ="btn-group">
                                <Link to={`/Courses/Update/${c.courseId}`}><button title="Edit" className="btn btn-warning mt-3 ms-1" data-toggle="tooltip">Edit</button></Link>
                                {' '}
                                <button className="btn btn-danger mt-3 ms-1" onClick={() => deleteCourse(c.id)}>Delete</button> 
                                </div>             
                            </td>
                    </tr>
                )}                        
            </tbody>
        </Table>
  
    </div>
</div>
        </div>
    )
};

export default Courses;