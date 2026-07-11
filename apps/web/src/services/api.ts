import axios from "axios";


const api = axios.create({

baseURL:
"https://YOUR_BACKEND_URL/api"

});


export default api;