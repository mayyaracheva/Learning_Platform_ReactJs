import { endpoints } from "./Endpoints";
import ApiBaseService from "./ApiBaseService";

export default class CoursesService extends ApiBaseService {
    static async getAllCourses(email, password) {
        const data = await super.get(endpoints.getAllCourses, email, password);
        return data;
    }

    static async getCourseById(id, email, password) {
        const data = await super.get(`${endpoints.getCourseById}/${id}`, email, password);
        return data;
    }

    static async unenroll(id, email, password) {
        const data = await super.get(`http://localhost:5000/api/Courses/${id}/unenroll`, email, password);
        return data;
    }

    static async getCourseDetails(id, email, password) {
        const data = await super.get(`http://localhost:5000/api/Courses/${id}/details`, email, password);
        return data;
    }

    static async createCourse(formData, email, password) {
        const data = await super.post(endpoints.createCourse, email, password, formData);
        return data;
    }

    static async updateCourse(id, formData, email, password) {
        const data = await super.put(`${endpoints.updateCourse}/${id}`, email, password, formData);
        return data;
    }

    static async getAllCourseSections(courseId, email, password) {
        const data = await super.get(`http://localhost:5000/api/Courses/${courseId}/sections`, email, password);
        return data;
    }

    static async deleteCourse(id, email, password) {
        const data = await super.delete(`${endpoints.deleteCourse}/${id}`, email, password);
        return data;
    }

    static async getUsersToEnroll(id) {
        const data = await super.enrollGet(`http://localhost:5000/api/Courses/${id}/enroll`);
        return data;
    }

    static async enrollUsers(id, formData) {
        const data = await super.enrollPost(`http://localhost:5000/api/Courses/${id}/enroll`, formData);
        return data;
    }

    
}