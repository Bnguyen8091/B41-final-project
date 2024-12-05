from flask import Flask, jsonify
from flask_cors import CORS
import logging

# Initialize Flask app
app = Flask(__name__)

# Logging configuration
logging.basicConfig(level=logging.DEBUG, format='%(asctime)s - %(levelname)s - %(message)s')

# Allow CORS for specified origins
CORS(app, resources={r"/api/*": {"origins": [
    "http://localhost:4200",
    "https://938b6a36ff29.ngrok.app"
]}}, supports_credentials=True)

# Temporary in-memory storage for news data
news_data = [
    {
        "title": "How UNC CHARLOTTE's deans celebrate Thanksgiving",
        "summary": "Deans from across UNC Charlotte’s campus shared their family photos...",
        "imageUrl": "https://inside.charlotte.edu/wp-content/themes/wp-epsilon-theme-main/images/default-post-avatar-1x1.png",
        "link": "https://inside.charlotte.edu/2024/11/22/how-unc-charlottes-deans-celebrate-thanksgiving/"
    },
    {
        "title": "UNC CHARLOTTE state of housing in Charlotte 2024 report analyzes housing issues",
        "summary": "The number of people who moved to the Charlotte metro from 2022 to 2023 could create a new city...",
        "imageUrl": "https://inside.charlotte.edu/wp-content/uploads/sites/1289/2024/11/2024-state-of-housing-600px-1-300x300.jpg",
        "link": "https://inside.charlotte.edu/2024/11/22/unc-charlotte-state-of-housing-in-charlotte-2024-report-analyzes-housing-issues/"
    }
]

# Root API route
@app.route('/')
def root():
    logging.info("Root endpoint accessed.")
    return jsonify({"message": "Welcome to the backend API. Use /api/ for API routes."}), 200

# News Data Endpoint (No authorization required)
@app.route('/api/news', methods=['GET'])
def get_news():
    logging.info("News endpoint accessed.")
    return jsonify(news_data), 200

if __name__ == '__main__':
    app.run(debug=True, port=3000)
