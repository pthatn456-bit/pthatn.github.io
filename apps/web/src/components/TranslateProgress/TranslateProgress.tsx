import {
    useTranslateStore
} from "../../stores/translate.store";



export default function TranslateProgress(){


const progress =
useTranslateStore(
state=>state.progress
);



return(

<div className="card">


<h2>
Translation Progress
</h2>


<progress

value={progress}

max={100}

style={{

width:"100%",

height:20

}}

/>


<p>

{
progress
}
%

</p>


</div>

);


}