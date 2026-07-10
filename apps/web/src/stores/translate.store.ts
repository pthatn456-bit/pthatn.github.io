import {
    create
} from "zustand";



interface TranslateState{


progress:number;


audioUrl:string | null;


setProgress:

(value:number)=>void;


setAudio:

(url:string)=>void;


}



export const useTranslateStore =
create<TranslateState>(
(set)=>({


progress:0,


audioUrl:null,



setProgress:
(value)=>
set({

progress:value

}),



setAudio:
(url)=>
set({

audioUrl:url

})


})

);