JOB_STATUS = {}



def create_job(

    job_id:str

):


    JOB_STATUS[job_id] = {


        "job_id":

        job_id,


        "status":

        "waiting",


        "progress":

        0,


        "audio_url":

        None

    }




def update_job(

    job_id:str,

    **kwargs

):


    if job_id not in JOB_STATUS:

        create_job(

            job_id

        )



    JOB_STATUS[job_id].update(

        kwargs

    )





def get_job(

    job_id:str

):


    return JOB_STATUS.get(

        job_id,

        {

            "job_id":

            job_id,


            "status":

            "not_found"

        }

    )