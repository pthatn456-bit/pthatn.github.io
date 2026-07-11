import axios from "axios";


const api = axios.create({

baseURL:
"https://youtube-voice-translator-api.onrender.com"

});


export default api;