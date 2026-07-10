import api
from "./api";


export async function uploadAudio(
file:File
){


const formData =
new FormData();


formData.append(
"file",
file
);



const response =
await api.post(

"/audio/upload",

formData,

{

headers:{

"Content-Type":
"multipart/form-data"

}

}

);



return response.data;


}