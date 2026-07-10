from faster_whisper import WhisperModel


from config import WHISPER_MODEL



model = WhisperModel(

    WHISPER_MODEL,

    device="cuda",

    compute_type="float16"

)