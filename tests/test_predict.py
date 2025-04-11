import unittest
from app.model.predict import predict_digit

class TestPrediction(unittest.TestCase):
    def test_prediction_output(self):
        result = predict_digit('path/to/sample_image.png')
        self.assertIn(result, range(10))  # digit should be 0-9

if __name__ == '__main__':
    unittest.main()
