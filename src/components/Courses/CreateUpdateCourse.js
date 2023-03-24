import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import CoursesService from "../services/ApiCoursesService";

const newCourseModel = {
    Title: "",
    Description: "",
    CategoryId: 1,
    PhotoURL: ""
}
const CreateUpdateCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isNew, setIsNew] = useState(true);
    const [course, setCourse] = useState(newCourseModel);

    useEffect(() => {
        if (id) {
            setIsNew(false);
            CoursesService.getCourseById(id)
                .then(data => {
                    setCourse({ ...course, Title: data.title, Description: data.description, CategoryId: data.categoryId, PhotoURL: data.photoURL });
                })
                .catch(error => {
                    alert(error)
                })
        }
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (isNew) {
            CoursesService.createCourse(course)
                .then(response => {
                    console.log('response from create', response);
                    navigate("/Courses");
                })
                .catch(error => {
                    alert(error);                    
                })
        } else {
            CoursesService.updateCourse(id, course)
                .then(response => {
                    console.log('response from update', response);
                    navigate("/Courses");
                })
                .catch(error => {
                    alert(error);
                })
        }
    }
  
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "CategoryId") {
            setCourse(course => ({ ...course, [name]: Number(value) }))
        } else {
            setCourse(course => ({ ...course, [name]: value }))
        }
        console.log(course);
    }
    return (
        <div>

            <h2>{isNew ? "Create new course" : `Edit Course:${course.Title}`}</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="Title">Title</label>
                    <br />
                    <input
                        name="Title"
                        type="text"
                        value={course.Title}
                        onChange={(e) => handleInputChange(e)}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <br />
                    <textarea
                        name="Description"
                        value={course.Description}
                        onChange={(e) => handleInputChange(e)}
                        className="form-control"
                        rows="10"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="CategoryId">Category</label>
                    <br />
                    <select
                        name="CategoryId"
                        value={course.CategoryId}
                        onChange={(e) => handleInputChange(e)}
                        className="custom-select">
                        <option
                            value="1">Public</option>
                        <option
                            value="2">Private</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="PhotoURL">PhotoURL</label>
                    <br />
                    <input
                        name="PhotoURL"
                        value={course.PhotoURL}
                        onChange={(e) => handleInputChange(e)}
                        type="text"
                        className="form-control"
                    />
                </div>
                <div>
                    <button className="btn-primary">Save</button>
                </div>
            </form>

            <NavLink to="/Courses" className="nav">Go Back</NavLink>
        </div>
    );
};

export default CreateUpdateCourse;