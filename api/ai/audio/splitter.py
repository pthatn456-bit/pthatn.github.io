import os



from pydub import AudioSegment




def split_audio(

    file:str,

    chunk_minutes:int = 10

):


    audio = AudioSegment.from_file(

        file

    )



    chunk_size = (

        chunk_minutes

        *

        60

        *

        1000

    )



    chunks=[]



    folder = os.path.dirname(

        file

    )



    for index,start in enumerate(

        range(

            0,

            len(audio),

            chunk_size

        )

    ):


        chunk = audio[

            start:

            start + chunk_size

        ]



        output = os.path.join(

            folder,

            f"chunk_{index}.wav"

        )



        chunk.export(

            output,

            format="wav"

        )



        chunks.append(

            output

        )



    return chunks