import createApiClient from "./api.service";
class userService {
    constructor(baseUrl = "http://localhost:3000/user") {
        this.api = createApiClient(baseUrl);
    }
    
    async getUser(){
        return (await this.api.get('/user-info')).data
    }

    async logout(){
        return (await this.api.get('/logout'))
    }
}
export default new userService();