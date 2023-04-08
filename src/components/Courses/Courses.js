import {useEffect, useState} from 'react';
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import CoursesService from "../services/ApiCoursesService";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import LoaderWrapper from '../Loader/LoaderWrapper';
import DimWrapper from '../Loader/DimWrapper';

const Courses = () => {

const[courses, setCourses] = useState([]);
const [filteredCourses, setFilteredCourses] = useState([]);
const[courseDeleted, setCourseDeleted] = useState(false);
const [isLoading, setIsLoading] = useState(false);
const {user} = useContext(AuthContext);
const [query, setQuery] = useState("");

useEffect(() => {
    setIsLoading(true);
    CoursesService.getAllCourses(user.email, user.password)
    .then(data => {     
        setCourses(data);
        setFilteredCourses(data);
        setIsLoading(false);
    })
    .catch(error => {
        setIsLoading(false);
        alert(error);
    })
},[courseDeleted, user.email, user.password])

const deleteCourse = (courseId) => {
    CoursesService.deleteCourse(courseId, user.email, user.password)
    .then(data => {
      alert(data);
      setCourseDeleted(true);     
  })
  .catch(error => {
      alert(error);
  })

  }

  useEffect(() => {
    if(query !== "") {
        let filteredTitles = courses.filter((c) =>
        c.title.toLowerCase().includes(query.toLowerCase()))
        if(filteredTitles.length > 0) {
            setFilteredCourses(filteredTitles);
        }       
    } else {
        setFilteredCourses(courses);
    }
           
  },[courses, query])  

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
            {' '}
            <input type="text" onChange={(e) => setQuery(e.target.value)} className="form-control" name="Title" />           
        </form>

        <Table className="table table-hover">
            <thead className="bg-dark text-white">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Content</th>
                    <th scope="col">Category</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                {filteredCourses && filteredCourses.map((c, index) => 
                    <tr key={c.courseId}>
                            <td>{index + 1}</td>
                            <td><Link to={`/Courses/Details/${c.courseId}`}>{c.title}</Link></td>
                            <td>{c.description}</td>
                            <td>{c.categoryName}</td>
                            <td>                            
                                <div className ="btn-group">
                                <Link to={`/Courses/Update/${c.courseId}`}><button title="Edit" className="btn btn-warning mt-3 ms-1" data-toggle="tooltip">Edit</button></Link>
                                {' '}
                                <button className="btn btn-danger mt-3 ms-1" onClick={() => deleteCourse(c.courseId)}>Delete</button> 
                                </div>             
                            </td>
                    </tr>
                )}                        
            </tbody>
        </Table>
  
    </div>
</div>
<LoaderWrapper isLoading={isLoading}/>
<DimWrapper isLoading={isLoading}/>
        </div>
    )
};

export default Courses;