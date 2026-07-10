import { useState } from "react";
import { uploadMp3 } from "../../services/upload.service";
import { translate } from "../../services/translate.service";
import AudioUpload
from "../../components/AudioUpload/AudioUpload";


import TranslateProgress
from "../../components/TranslateProgress/TranslateProgress";


import AudioResult
from "../../components/AudioResult/AudioResult";



export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1 style={{ color: "red" }}>
        HOME ĐANG CHẠY
      </h1>
    </div>
  );
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