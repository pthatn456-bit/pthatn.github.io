from pydub import AudioSegment



def merge_audio(

    files:list,

    output:str

):


    final_audio = AudioSegment.empty()



    for file in files:


        audio = AudioSegment.from_mp3(

            file

        )


        final_audio += audio



    final_audio.export(

        output,

        format="mp3"

    )



    return output