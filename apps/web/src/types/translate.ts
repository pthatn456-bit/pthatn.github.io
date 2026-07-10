export interface UploadResponse{


job_id:string;


status:string;


}



export interface TranslateStatus{


job_id:string;


status:
"waiting"
|
"processing"
|
"completed"
|
"failed";


progress:number;


audio_url?:string;


}