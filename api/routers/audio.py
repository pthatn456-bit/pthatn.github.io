import os

import uuid



from fastapi import (

    APIRouter,

    UploadFile,

    File,

    HTTPException

)



from config import UPLOAD_DIR


from workers.queue import add_job


from services.job import create_job


from validators.audio import validate_audio_file




router = APIRouter()




@router.post("/upload")

async def upload_audio(

    file:UploadFile = File(...)

):


    data = await file.read()



    try:


        validate_audio_file(

            file.filename,

            len(data)

        )


    except ValueError as error:


        raise HTTPException(

            status_code=400,

            detail=str(error)

        )



    job_id = str(

        uuid.uuid4()

    )



    create_job(

        job_id

    )



    filename = (

        job_id

        +

        ".mp3"

    )



    path = os.path.join(

        UPLOAD_DIR,

        filename

    )



    os.makedirs(

        UPLOAD_DIR,

        exist_ok=True

    )



    with open(

        path,

        "wb"

    ) as audio:


        audio.write(

            data

        )



    await add_job(

        job_id

    )



    return {


        "job_id":

        job_id,


        "status":

        "waiting"

    }