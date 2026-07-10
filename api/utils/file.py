import os



def create_folder(

    path:str

):


    if not os.path.exists(

        path

    ):


        os.makedirs(

            path

        )



def file_exists(

    path:str

):


    return os.path.isfile(

        path

    )