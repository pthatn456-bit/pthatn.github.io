import os



ALLOWED_EXTENSIONS = [

    ".mp3",

    ".wav",

    ".m4a"

]



MAX_FILE_SIZE = (

    500

    *

    1024

    *

    1024

)




def validate_audio_file(

    filename:str,

    size:int

):


    extension = os.path.splitext(

        filename

    )[1].lower()



    if extension not in ALLOWED_EXTENSIONS:


        raise ValueError(

            "Only mp3, wav, m4a allowed"

        )



    if size > MAX_FILE_SIZE:


        raise ValueError(

            "File too large. Maximum 500MB"

        )



    return True