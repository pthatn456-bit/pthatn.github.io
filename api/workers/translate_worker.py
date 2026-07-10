import asyncio



from workers.queue import get_job


from ai.pipeline import translate_audio



from services.job import (

    update_job

)




async def worker():


    while True:


        job_id = await get_job()



        update_job(

            job_id,

            status="processing",

            progress=10

        )



        try:


            result = await translate_audio(

                job_id

            )



            update_job(

                job_id,

                **result

            )



        except Exception as error:


            update_job(

                job_id,

                status="failed",

                error=str(error)

            )





def start_worker():


    asyncio.create_task(

        worker()

    )