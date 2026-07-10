import os


from fastapi import APIRouter

from fastapi.responses import FileResponse


from config import OUTPUT_DIR



router = APIRouter()



@router.get("/{filename}")
def download(

    filename:str

):


    path = os.path.join(

        OUTPUT_DIR,

        filename

    )



    return FileResponse(

        path,

        media_type=
        "audio/mpeg",

        filename=
        filename

    )