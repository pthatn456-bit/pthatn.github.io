import asyncio



queue = asyncio.Queue()



async def add_job(

    job_id:str

):


    await queue.put(

        job_id

    )



async def get_job():


    return await queue.get()