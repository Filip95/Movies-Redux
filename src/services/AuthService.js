import HttpService from "./HttpService";

class AuthService extends HttpService {
    login = async (credentials) => {
        try{
            const {data} = await this.client.post("/auth/login", credentials);
            const {token,user} = data;

            localStorage.setItem("token", token);
            return {token,user};
        }catch(err){
            alert("Invalid credentials");
            throw err;
        }
    };

    logout = async () => {
        await this.client.post("/auth/logout");
        localStorage.removeItem("token");
    };

    getActiveUser = async () =>{
        const {data} = await this.client.get("/auth/me");
        return data;
    };
}

export default new AuthService();