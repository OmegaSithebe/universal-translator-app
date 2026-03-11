import os
from openai import OpenAI
from dotenv import load_dotenv

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

def translate_text(text, source_lang, target_lang):

    prompt = f"""
    Translate the following text from {source_lang} to {target_lang}:

    {text}
    """

    response = client.chat.completions.create(
        model="gpt-4.1-mini",
        messages=[
            {"role": "system", "content": "You are a professional document translator."},
            {"role": "user", "content": prompt}
        ]
    )

    return response.choices[0].message.content