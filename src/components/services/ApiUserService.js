import { endpoints } from "./Endpoints";
import ApiBaseService from "./ApiBaseService";

export default class UserService extends ApiBaseService {
    static async loginUser(formData) {
        const data = await super.login(endpoints.userlogin, formData);
        return data;
    }

    static async registerUser(formData) {
        const data = await super.register(endpoints.userregistration, formData);
        return data;
    }
}