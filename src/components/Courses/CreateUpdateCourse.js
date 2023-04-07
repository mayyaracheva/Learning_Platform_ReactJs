import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import CoursesService from "../services/ApiCoursesService";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const newCourseModel = {
    Title: "",
    Description: "",
    CategoryId: 0,
    PhotoURL: ""
}
const CreateUpdateCourse = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [isNew, setIsNew] = useState(true);
    const [course, setCourse] = useState(newCourseModel);
    const { user } = useContext(AuthContext);
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (id) {
            setIsNew(false);
            CoursesService.getCourseById(id, user.email, user.password)
                .then(data => {
                    setCourse({ ...course, Title: data.title, Description: data.description, CategoryId: data.categoryId, PhotoURL: data.photoURL });
                })
                .catch(error => {
                    alert(error)
                })
        }
    }, [id])

    const formIsvalid = () => {
        const _errors = {};

        if (course.CategoryId === 0 || course.CategoryId === -1) {
            _errors.CategoryId = "Please select course category";
        }

        if (course.Title === "") {
            _errors.Title = "Please provide course title";
        }

        if (course.Description === "") {
            _errors.Description = "Please provide course description";
        }

        if (course.PhotoURL === "") {
            _errors.PhotoURL = "Please provide course image";
        }

        setErrors(_errors);
        return Object.keys(_errors).length === 0;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        if (!formIsvalid()) {
            return
        }
      
        if (isNew) {
            CoursesService.createCourse(course, user.email, user.password)
                .then(response => {
                    alert(response);
                    navigate("/Courses");
                })
                .catch(error => {
                    alert(error);
                })
        } else {
            CoursesService.updateCourse(id, course, user.email, user.password)
                .then(response => {
                    alert(response);
                    navigate(`/Courses/Details/${id}`);
                })
                .catch(error => {
                    alert(error);
                })
        }
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCourse(course => ({ ...course, [name]: value }));
    }

    const onCategorySelect = (e) => {        
        const { name, value } = e.target;
        setCourse(course => ({ ...course, [name]: Number(value) }))
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
                        value={course.CategoryId ?? -1}
                        onChange={(e) => onCategorySelect(e)}
                        className="custom-select"
                    >
                        <option value={-1}>- Please, select -</option>
                        <option key={`public_course`}
                            value={1}>Public</option>
                        <option key={'private_course'}
                            value={2}>Private</option>
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
                <div className="mb-4 mt-4">
                    <button className="btn btn-primary ms-3 me-3">Save</button>
                    <NavLink to="/Courses" className="btn btn-secondary ms-3 me-3">Go Back</NavLink>
                </div>
                {errors.CategoryId && (
                    <div className="col-sm-6 text-danger">{errors.CategoryId}</div>
                )}
                {errors.Title && (
                    <div className="col-sm-6 text-danger">{errors.Title}</div>
                )}
                {errors.Description && (
                    <div className="col-sm-6 text-danger">{errors.Description}</div>
                )}
                {errors.PhotoURL && (
                    <div className="col-sm-6 text-danger">{errors.PhotoURL}</div>
                )}
            </form>            
        </div>
    );
};

export default CreateUpdateCourse;