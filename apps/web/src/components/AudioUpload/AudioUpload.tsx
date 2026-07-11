import {
    useState
} from "react";


import {
    uploadAudio
} from "../../services/upload.service";


import {
    useTranslateStore
} from "../../stores/translate.store";


import useTranslate
from "../../hooks/useTranslate";



export default function AudioUpload(){


const [
file,
setFile
]=useState<File|null>(null);



const [
jobId,
setJobId
]=useState<string|null>(null);



const setProgress =
useTranslateStore(

state=>state.setProgress

);



useTranslate(jobId);



async function submit(){


if(!file){

return;

}



const result =
await uploadAudio(

file

);


setJobId(

result.job_id

);


setProgress(

10

);


}