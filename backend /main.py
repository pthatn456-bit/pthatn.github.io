from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
import uuid


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


UPLOAD_DIR = "uploads"

os.makedirs(
    UPLOAD_DIR,
    exist_ok=True
)


@app.post("/api/audio/upload")
async def upload_audio(
    file: UploadFile = File(...)
):

    job_id = str(uuid.uuid4())

    filename = f"{job_id}_{file.filename}"

    path = os.path.join(
        UPLOAD_DIR,
        filename
    )


    with open(path, "wb") as buffer:
        buffer.write(
            await file.read()
        )


    return {
        "job_id": job_id,
        "filename": filename,
        "message": "upload success"
    }