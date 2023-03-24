import { endpoints } from "./Endpoints";
import ApiBaseService from "./ApiBaseService";

export default class CoursesService extends ApiBaseService {
    static async getAllCourses() {
        const data = await super.get(endpoints.getAllCourses);
        return data;
    }

    static async getCourseById(id) {
        const data = await super.get(`${endpoints.getCourseById}/${id}`);
        return data;
    }

    static async createCourse(formData) {
        const data = await super.post(endpoints.createCourse, formData);
        return data;
    }

    static async updateCourse(id, formData) {
        const data = await super.put(`${endpoints.updateCourse}/${id}`, formData);
        return data;
    }

    static async getAllCourseSections(courseId) {
        const data = await super.get(`http://localhost:5000/api/Courses/${courseId}/sections`);
        return data;
    }

    static async deleteCourse(id) {
        const data = await super.delete(`${endpoints.getAllCourses}/${id}`);
        return data;
    }

    
}