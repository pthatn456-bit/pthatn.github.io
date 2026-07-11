import axios from "axios";


const api = axios.create({

baseURL:
"https://your-api-server.com/api"

});


export default api;