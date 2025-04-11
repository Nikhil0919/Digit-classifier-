from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_predict_route():
    response = client.post("/predict", json={"input_number": "4567abc"})
    assert response.status_code == 200
    assert "quality_score" in response.json()

def test_empty_input():
    response = client.post("/predict", json={"input_number": ""})
    assert response.status_code == 200
    assert response.json()["quality_score"] == 0

def test_only_letters():
    response = client.post("/predict", json={"input_number": "abcdef"})
    assert response.status_code == 200
    assert response.json()["quality_score"] == 0

def test_all_digits():
    response = client.post("/predict", json={"input_number": "987654"})
    assert response.status_code == 200
    assert response.json()["quality_score"] == 60

