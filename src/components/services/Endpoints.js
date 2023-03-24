export const endpoints = {
    getPublicCourses: 'http://localhost:5000/api/Home', 
    getAllCourses: 'http://localhost:5000/api/Courses',   
    getCourseById: 'http://localhost:5000/api/Courses',
    createCourse: 'http://localhost:5000/api/Courses',
    updateCourse: 'http://localhost:5000/api/Courses',
    deleteCourse: 'http://localhost:5000/api/Courses',
    createSection: 'http://localhost:5000/api/Courses/id/sections',
    updateSection: 'http://localhost:5000/api/Courses/courseId/sections/sectionId',
    deleteSection: 'http://localhost:5000/api/Courses/sections/id',
    
}