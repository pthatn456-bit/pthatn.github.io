import subprocess



from ai.tts.voice import VOICE_MODEL



def text_to_speech(

    text:str,

    output:str

):


    process = subprocess.Popen(

        [

            "piper",

            "--model",

            VOICE_MODEL,

            "--output_file",

            output

        ],

        stdin=subprocess.PIPE

    )



    process.communicate(

        input=text.encode(

            "utf-8"

        )

    )



    return output