import {
    useEffect
} from "react";


import {
    getTranslateStatus
} from "../services/translate.service";


import {
    useTranslateStore
} from "../stores/translate.store";



export default function useTranslate(
jobId:string | null
){


const setProgress =
useTranslateStore(
state=>state.setProgress
);


const setAudio =
useTranslateStore(
state=>state.setAudio
);



useEffect(()=>{


if(!jobId){

return;

}



const timer =
setInterval(async()=>{


const data =
await getTranslateStatus(
jobId
);



setProgress(
data.progress
);



if(data.status==="completed"){


setAudio(
data.audio_url
);


clearInterval(
timer
);


}



},2000);



return ()=>{


clearInterval(
timer
);


};



},[
jobId
]);



}