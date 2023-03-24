import { endpoints } from "./Endpoints";
import ApiBaseService from "./ApiBaseService";

export default class HomeService extends ApiBaseService {
    static async getPublicCourses() {
        const data = await super.get(endpoints.getPublicCourses);
        return data;
    }
}