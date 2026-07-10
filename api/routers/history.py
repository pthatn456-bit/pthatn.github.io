from fastapi import APIRouter


from database.crud import get_history




router = APIRouter()




@router.get("/")

def history():


    data = get_history()



    return [

        {


            "job_id":

            item.job_id,


            "original_file":

            item.original_file,


            "translated_file":

            item.translated_file,


            "created_at":

            item.created_at

        }


        for item in data

    ]