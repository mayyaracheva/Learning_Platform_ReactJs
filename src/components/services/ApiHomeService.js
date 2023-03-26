import { endpoints } from "./Endpoints";
import ApiBaseService from "./ApiBaseService";

export default class HomeService extends ApiBaseService {
    static async getPublicCourses() {
        const data = await super.getPublic(endpoints.getPublicCourses);
        return data;
    }
}