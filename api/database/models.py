from sqlalchemy import (

    Column,

    Integer,

    String,

    DateTime

)


from datetime import datetime



from database.database import Base




class AudioJob(Base):


    __tablename__ = "audio_jobs"



    id = Column(

        Integer,

        primary_key=True

    )



    job_id = Column(

        String,

        unique=True,

        index=True

    )



    original_file = Column(

        String

    )



    translated_file = Column(

        String

    )



    status = Column(

        String,

        default="waiting"

    )



    created_at = Column(

        DateTime,

        default=datetime.utcnow

    )