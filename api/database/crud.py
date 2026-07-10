from database.database import SessionLocal


from database.models import AudioJob




def save_job(

    job_id:str,

    original:str,

    output:str

):


    db = SessionLocal()



    item = AudioJob(

        job_id=job_id,

        original_file=original,

        translated_file=output,

        status="completed"

    )



    db.add(

        item

    )



    db.commit()



    db.close()





def get_history():



    db = SessionLocal()



    data = db.query(

        AudioJob

    ).order_by(

        AudioJob.id.desc()

    ).all()



    db.close()



    return data