import createApiClient from "./api.service";
class userService {
    constructor(baseUrl = "http://localhost:3000/user") {
        this.api = createApiClient(baseUrl);
    }
    
    async getUser(){
        return await this.api.get('/user-info')
    }
}
export default new userService();