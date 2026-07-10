from transformers import (

    AutoTokenizer,

    AutoModelForSeq2SeqLM

)



from config import NLLB_MODEL




tokenizer = AutoTokenizer.from_pretrained(

    NLLB_MODEL

)



model = AutoModelForSeq2SeqLM.from_pretrained(

    NLLB_MODEL

)