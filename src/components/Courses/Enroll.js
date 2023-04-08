import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import CoursesService from "../services/ApiCoursesService";

const Enroll = () => {

    const { id } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [usersToEnroll, setUsersToEnroll] = useState([]);


    useEffect(() => {
        if (id) {
            CoursesService.getUsersToEnroll(id)
                .then(data => {
                    setUsers(data);                    
                })
                .catch(error => {
                    alert(error);
                })
        }

    }, [id])

    const onStudentsSubmit = (e) => {
        CoursesService.enrollUsers(id, usersToEnroll)
        .then(response => {
            alert(response);
            navigate('/Courses');
        })
    }

    const onUserSelected = (e) => {        
        const {value, checked} = e.target;
        let selected = Number(value);       
        if(!usersToEnroll.includes(selected) && checked){
            setUsersToEnroll([...usersToEnroll,selected])
        } else if (usersToEnroll.includes(selected) && !checked) {           
            setUsersToEnroll(usersToEnroll => usersToEnroll.filter(u => u !== selected))
        } else {
            return
        }
        
    }
    return (
        <div>
            <p className="margin12">Students not enrolled in this course</p>   
                       
                    {users && users.map(u => {
                        return (                           
                            <div key={u.id}>
                                    <input 
                                    key={u.id}
                                    type="checkbox"                                    
                                    name="students" 
                                    value={u.id} 
                                    onChange={onUserSelected}                                    
                                    /> 
                                    <label htmlFor={u.id}>{u.firstName} {u.lastName}</label>                                
                            </div>
                        )
                    })
                    }                
                <br />
                <button className="btn btn-primary" onClick={onStudentsSubmit}>Enroll</button>                        
        </div>
    )
};
export default Enroll;