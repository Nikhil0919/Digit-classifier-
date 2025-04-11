from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
load_dotenv()


app = FastAPI()

class NumberInput(BaseModel):
    input_number: str   

@app.get("/")
def root():
    return {"message": "Number Quality API is running!"}

@app.post("/predict")
def predict_number_quality(data: NumberInput):
    input_number = data.input_number
    # Dummy logic: count digits, can replace with actual ML model
    quality_score = len([ch for ch in input_number if ch.isdigit()]) * 10
    return {"input": input_number, "quality_score": quality_score}
