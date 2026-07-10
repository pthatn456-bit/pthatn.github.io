import {
    useTranslateStore
} from "../../stores/translate.store";



export default function DownloadButton(){


const audioUrl =
useTranslateStore(
state=>state.audioUrl
);



function download(){


const link =
document.createElement(
"a"
);


link.href =
audioUrl;


link.download =
"vietnamese.mp3";


link.click();


}



return(

<button

onClick={download}

style={{

padding:"12px 20px",

background:"#16a34a",

color:"white",

borderRadius:8

}}

>

Download Vietnamese MP3

</button>

);


}