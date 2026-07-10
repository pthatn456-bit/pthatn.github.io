import {
    useState
} from "react";



export default function useAudio(){


const [
audio,
setAudio
]=useState<string | null>(null);



function load(
url:string
){

setAudio(url);

}



return {

audio,

load

};


}