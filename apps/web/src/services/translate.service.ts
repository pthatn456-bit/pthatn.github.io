import api
from "./api";



export async function getTranslateStatus(
jobId:string
){


const response =
await api.get(

`/translate/status/${jobId}`

);



return response.data;


}