import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import HomePage from '../components/Home/HomePage';
import AboutPage from '../components/Home/AboutPage';
import Contact from '../components/Home/Contact';
import Registration from '../components/Home/Authentication/Registration';
import Login from '../components/Home/Authentication/Login';
import Courses from '../components/Courses/Courses';
import CourseDetails from '../components/Courses/CourseDetails';
import CreateUpdateSection from '../components/Sections/CreateUpdateSection';
import SectionDetails from '../components/Sections/SectionDetails';
import CreateUpdateCourse from '../components/Courses/CreateUpdateCourse';

const RoutesComponent = () => {
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
            element: <Courses />
        },
        {
            path: "/Courses/Details/:id",
            element: <CourseDetails />
        },
        {
            path: "/Courses/Update/:id",
            element: <CreateUpdateCourse />
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