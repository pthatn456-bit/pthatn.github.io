import os

from dotenv import load_dotenv


load_dotenv()



BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)



STORAGE_DIR = os.path.join(
    BASE_DIR,
    "storages"
)



UPLOAD_DIR = os.path.join(
    STORAGE_DIR,
    "uploads",
    "english"
)



OUTPUT_DIR = os.path.join(
    STORAGE_DIR,
    "output",
    "vietnamese"
)



MODEL_DIR = os.path.join(
    BASE_DIR,
    "models"
)



WHISPER_MODEL = os.path.join(
    MODEL_DIR,
    "faster-whisper",
    "whisper-large-v3"
)



NLLB_MODEL = os.path.join(
    MODEL_DIR,
    "nllb",
    "nllb-200"
)



PIPER_MODEL = os.path.join(
    MODEL_DIR,
    "piper",
    "vietnamese",
    "voice.onnx"
)