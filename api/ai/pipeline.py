import os


from ai.audio.converter import convert_to_wav
from ai.audio.splitter import split_audio
from ai.audio.cleanup import cleanup_files


from ai.whisper.transcribe import transcribe_audio


from ai.translator.translate import translate_text


from ai.tts.piper import text_to_speech


from config import (
    UPLOAD_DIR,
    OUTPUT_DIR
)


from services.job import update_job


from database.crud import save_job




async def translate_audio(

    job_id: str

):

    """
    Luồng xử lý:

    English MP3
        |
        ↓
    Convert WAV
        |
        ↓
    Split audio
        |
        ↓
    Whisper STT
        |
        ↓
    English Text
        |
        ↓
    NLLB Translation
        |
        ↓
    Vietnamese Text
        |
        ↓
    Piper TTS
        |
        ↓
    Vietnamese MP3
    """



    source_file = os.path.join(

        UPLOAD_DIR,

        job_id + ".mp3"

    )



    if not os.path.exists(

        source_file

    ):

        raise FileNotFoundError(

            "Audio file not found"

        )



    update_job(

        job_id,

        status="processing",

        progress=10

    )



    # 1. Convert MP3 -> WAV

    wav_file = convert_to_wav(

        source_file

    )



    update_job(

        job_id,

        progress=25

    )



    # 2. Split audio dài thành nhiều đoạn

    chunks = split_audio(

        wav_file,

        chunk_minutes=10

    )



    update_job(

        job_id,

        progress=40

    )



    # 3. Speech To Text

    english_text = transcribe_audio(

        chunks

    )



    update_job(

        job_id,

        progress=60

    )



    if not english_text:


        raise Exception(

            "Cannot detect speech"

        )



    # 4. English -> Vietnamese

    vietnamese_text = translate_text(

        english_text

    )



    update_job(

        job_id,

        progress=75

    )



    # 5. Text -> Vietnamese MP3


    os.makedirs(

        OUTPUT_DIR,

        exist_ok=True

    )



    output_file = os.path.join(

        OUTPUT_DIR,

        job_id + ".mp3"

    )



    text_to_speech(

        vietnamese_text,

        output_file

    )



    update_job(

        job_id,

        progress=95

    )



    # 6. Save history database

    save_job(

        job_id,

        source_file,

        output_file

    )



    # 7. Xóa file tạm

    temp_files = [

        wav_file

    ]



    temp_files.extend(

        chunks

    )



    cleanup_files(

        temp_files

    )



    update_job(

        job_id,

        progress=100

    )



    return {


        "job_id":

        job_id,


        "status":

        "completed",


        "progress":

        100,


        "audio_url":

        "/api/download/"

        +

        job_id

        +

        ".mp3"

    }