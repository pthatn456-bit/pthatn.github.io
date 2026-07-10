from config import (

    UPLOAD_DIR,

    OUTPUT_DIR

)

import os



os.makedirs(

    UPLOAD_DIR,

    exist_ok=True

)



os.makedirs(

    OUTPUT_DIR,

    exist_ok=True

)
from fastapi import Request


MAX_UPLOAD_SIZE = (

    500

    *

    1024

    *

    1024

)



@app.middleware("http")

async def limit_upload_size(

    request:Request,

    call_next

):


    size = request.headers.get(

        "content-length"

    )


    if size and int(size) > MAX_UPLOAD_SIZE:


        return {

            "error":

            "File too large"

        }



    return await call_next(

        request

    )

from database.database import Base, engine


from database import models



Base.metadata.create_all(

    bind=engine

)
from routers import history



app.include_router(

    history.router,

    prefix="/api/history"

)