from fastapi import APIRouter



from services.job import get_job




router = APIRouter()




@router.get("/status/{job_id}")

def translate_status(

    job_id:str

):


    return get_job(

        job_id

    )