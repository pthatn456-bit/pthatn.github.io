import { useState } from "react";
import { uploadMp3 } from "../../services/upload.service";
import { translate } from "../../services/translate.service";
import AudioUpload
from "../../components/AudioUpload/AudioUpload";


import TranslateProgress
from "../../components/TranslateProgress/TranslateProgress";


import AudioResult
from "../../components/AudioResult/AudioResult";



export default function Home(){

const [downloadUrl, setDownloadUrl] = useState("");

async function handleUpload(file: File) {
    const upload = await uploadMp3(file);
    const result = await translate(upload.job_id);
    setDownloadUrl(result.download_url);
}    


return (

<div className="container">


<h1>

YouTube Voice Translator

</h1>


<br/>


<AudioUpload onSelect={handleUpload} />


<br/>


<TranslateProgress/>


<br/>


<AudioResult url={downloadUrl} />


</div>

);


}