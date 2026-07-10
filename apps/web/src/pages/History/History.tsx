import {
    useEffect,
    useState
} from "react";


import {
    getHistory
} from "../../services/history.service";




export default function History(){



const [items,setItems] =
useState<any[]>([]);



useEffect(()=>{


getHistory()

.then(

data=>setItems(data)

);


},[]);




return (

<div className="container">


<h1>

History

</h1>



{

items.map(

(item)=>(

<div key={item.job_id}>


<p>

{item.original_file}

</p>


<a

href={

"/api/download/"

+

item.job_id

+

".mp3"

}

>

Download Vietnamese MP3

</a>


<hr/>


</div>

)

)

}



</div>

);


}