from fastapi import FastAPI
from api.translate import router

app = FastAPI()

app.include_router(router)

@app.get("/")
def root():
    return {"message": "Universal Translator API is running"}