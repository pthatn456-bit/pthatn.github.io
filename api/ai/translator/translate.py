from ai.translator.nllb import (

    tokenizer,

    model

)



def translate_text(

    text:str

):


    tokenizer.src_lang = "eng_Latn"



    inputs = tokenizer(

        text,

        return_tensors="pt"

    )



    translated = model.generate(

        **inputs,

        forced_bos_token_id=

        tokenizer.lang_code_to_id[
            "vie_Latn"
        ]

    )



    result = tokenizer.batch_decode(

        translated,

        skip_special_tokens=True

    )



    return result[0]