from ai.whisper.model import model




def transcribe_audio(

    files

):


    full_text = ""



    if isinstance(

        files,

        str

    ):


        files=[files]



    for file in files:



        segments,info = model.transcribe(

            file,

            language="en"

        )



        for segment in segments:


            full_text += (

                segment.text

                +

                " "

            )



    return full_text.strip()