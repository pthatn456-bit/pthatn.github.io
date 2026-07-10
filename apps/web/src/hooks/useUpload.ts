import {
    useState
} from "react";


import {
    uploadAudio
} from "../services/upload.service";


export default function useUpload(){


const [loading,setLoading] =
useState(false);


const [error,setError] =
useState<string | null>(null);



async function upload(
file:File
){


try{


setLoading(true);

setError(null);


const result =
await uploadAudio(file);


return result;


}
catch(error){


setError(
"Upload failed"
);


throw error;


}
finally{


setLoading(false);


}


}



return {

upload,

loading,

error

};


}