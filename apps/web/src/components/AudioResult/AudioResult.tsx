import {
    useTranslateStore
} from "../../stores/translate.store";


import DownloadButton
from "../DownloadButton/DownloadButton";



export default function AudioResult(){


const audioUrl =
useTranslateStore(
state=>state.audioUrl
);



if(!audioUrl){

return null;

}



return(

<div>


<h2>
Vietnamese Audio
</h2>


<audio

controls

src={audioUrl}

style={{

width:"100%"

}}

/>


<br/><br/>


<DownloadButton/>


</div>

);


}