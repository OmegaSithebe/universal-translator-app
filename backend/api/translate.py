from fastapi import APIRouter, UploadFile, File, Form
from translator.openai_translator import translate_text

router = APIRouter()

@router.post("/translate")
async def translate_document(
    file: UploadFile = File(...),
    source_lang: str = Form(...),
    target_lang: str = Form(...)
):

    content = await file.read()
    text = content.decode("utf-8")

    translated = translate_text(text, source_lang, target_lang)

    return {"translated_text": translated}