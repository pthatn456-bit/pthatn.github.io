import os


from pydub import AudioSegment



def convert_to_wav(

    input_file:str

):


    output_file = (

        os.path.splitext(
            input_file
        )[0]

        +

        ".wav"

    )



    audio = AudioSegment.from_mp3(

        input_file

    )



    audio.export(

        output_file,

        format="wav"

    )



    return output_file