import os



def remove_file(

    path:str

):


    if os.path.exists(

        path

    ):


        os.remove(

            path

        )




def cleanup_files(

    files:list

):


    for file in files:


        remove_file(

            file

        )