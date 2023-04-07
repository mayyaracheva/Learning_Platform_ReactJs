import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
import AboutPage from '../components/Home/AboutPage';
import Contact from '../components/Home/Contact';
import Registration from '../components/Authentication/Registration';
import Login from '../components/Authentication/Login';
import Courses from '../components/Courses/Courses';
import CourseDetails from '../components/Courses/CourseDetails';
import CreateUpdateSection from '../components/Sections/CreateUpdateSection';
import SectionDetails from '../components/Sections/SectionDetails';
import CreateUpdateCourse from '../components/Courses/CreateUpdateCourse';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import StudentCourses from '../components/Courses/StudentCourses';
import StudentCourseDetails from '../components/Courses/StudentCourseDetails';
import Enroll from '../components/Courses/Enroll';

const RoutesComponent = () => {

    const {user, userLogged} = useContext(AuthContext);

    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/About",
            element: <AboutPage />
        },
        {
            path: "/Contact",
            element: <Contact />
        },
        {
            path: "/Register",
            element: <Registration />
        },
        {
            path: "/Login",
            element: <Login />
        },
        {
            path: "/Courses",
            element: user.roleId === 1 ? <Courses /> : <StudentCourses />
        },
        {
            path: "/Courses/Details/:id",
            element: userLogged ? (user.roleId === 1 ? <CourseDetails /> : <StudentCourseDetails />) : <Login/>
        },
        {
            path: "/Courses/Update/:id",
            element: <CreateUpdateCourse />
        },
        {
            path: "/Courses/Enroll/:id",
            element: <Enroll />
        },
        {
            path: "/Courses/Create",
            element: <CreateUpdateCourse />
        },
        {
            path: "/Section/CreateSection/:courseId",
            element: <CreateUpdateSection />
        },
        {
            path: "/Section/Edit/:id",
            element: <CreateUpdateSection />
        },
        {
            path: "/Section/Details/:courseId/:sectionId",
            element: <SectionDetails />
        }       
    ]);

    return routes;
};

export default RoutesComponent;