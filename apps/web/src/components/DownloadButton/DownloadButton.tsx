import {
    useTranslateStore
} from "../../stores/translate.store";



export default function DownloadButton(){


const audioUrl =
useTranslateStore(

state=>state.audioUrl

);



function download(){


if(!audioUrl){

return;

}



const link =
document.createElement(

"a"

);



link.href =

"http://localhost:8000"

+

audioUrl;



link.download =

"vietnamese.mp3";



document.body.appendChild(

link

);



link.click();



link.remove();


}




return(


<button

onClick={download}

disabled={!audioUrl}

style={{

padding:"12px 20px",

background:

audioUrl

?

"#16a34a"

:

"#9ca3af",

color:"white",

borderRadius:8,

cursor:

audioUrl

?

"pointer"

:

"not-allowed"

}}

>


Download Vietnamese MP3


</button>


);


}