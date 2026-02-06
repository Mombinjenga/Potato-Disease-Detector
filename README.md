# Potato Disease Detection System

A web-based AI application designed to help Kenyan farmers quickly identify and diagnose potato diseases using image analysis and symptom description. This platform provides fast, accurate disease detection and practical treatment recommendations without requiring an on-site agricultural expert.

---

## Features

- 🖼️ **Image-Based Detection**: Upload a potato leaf image for instant AI-powered disease diagnosis
- 📝 **Symptom-Based Detection**: Describe symptoms in text for disease prediction and recommendations
- 🎯 **Accurate Predictions**: Machine learning model trained to detect common potato diseases
- 💡 **Practical Recommendations**: Get tailored treatment and prevention advice specific to Kenyan farming conditions
- 📱 **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- 🌍 **Farmer-Friendly Interface**: Simple, easy-to-use design suitable for all technical skill levels

---

## Project Structure

```
Potato-Disease-Detection/
├── frontend/                 # Frontend web application
│   ├── index.html           # Landing/home page
│   ├── predict.html         # Disease prediction page
│   ├── script.js            # JavaScript functionality
│   ├── styles.css           # CSS styling
│   ├── assets/              # Images and static assets
│   ├── backend/             # Backend API (Flask/Python)
│   └── README.md            # This file
└── LICENSE                  # Project license
```

---

## Technologies Used

### Frontend
- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive styling and layout
- **JavaScript (ES6+)**: Client-side functionality and API interactions

### Backend (in development)
- **Python**: Server-side logic
- **Flask**: Web framework for API endpoints
- **TensorFlow/PyTorch**: Machine learning model for disease detection
- **NumPy/Pandas**: Data processing

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Python 3.8+ (for backend setup)
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Potato-Disease-Detection.git
   cd Potato-Disease-Detection
   ```

2. **Set up the frontend**
   - Open `frontend/index.html` in your browser, or
   - Use a local server:
     ```bash
     # Python 3.x
     python -m http.server 8000
     # Then navigate to http://localhost:8000/frontend
     ```

3. **Set up the backend** (when ready)
   ```bash
   cd frontend/backend
   pip install -r requirements.txt
   python app.py
   ```

---

## Usage

### 1. **Home Page** (`index.html`)
- Navigate to the home page to learn about the application
- Click "Get Started" to proceed to the prediction page

### 2. **Prediction Page** (`predict.html`)
Detect diseases using one of two methods:

#### Method 1: Image Upload
- Click "Choose potato leaf image"
- Select a clear, well-lit image of an affected potato leaf
- Click "Predict from Image" to analyze

#### Method 2: Symptom Description
- In the "Describe Symptoms" section, write a detailed description of what you observe:
  - Color changes (yellowing, browning, spots)
  - Texture changes (wilting, lesions)
  - Pattern of spread
  - Timeline of symptoms
- Click "Predict from Text" to get a diagnosis

### 3. **Results**
The system will return:
- **Disease Identification**: The likely disease affecting your crop
- **Confidence Level**: How confident the model is in the prediction
- **Recommendations**: Specific treatment and prevention strategies for Kenyan farming

---

## Potato Diseases Detected

This model is trained to classify potato leaves into three categories:

- **Early Blight**: Brown irregular spots with concentric rings on lower leaves. Prevention: Remove infected leaves, improve air circulation, apply fungicide if needed.
- **Late Blight**: Water-soaked spots, white powdery layer underneath leaves. Prevention: Avoid overhead watering, use resistant varieties, fungicide treatment recommended.
- **Healthy Leaf**: No disease detected. Continue regular crop management and monitoring.

---

## API Endpoints (Backend)

*Coming soon with backend implementation*

- `POST /predict/image` - Send image for disease prediction
- `POST /predict/text` - Send symptom description for disease prediction
- `GET /diseases` - Get information about all detectable diseases

---

## Contributing

We welcome contributions! To help improve this project:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes and commit (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/improvement`)
5. Open a Pull Request

---

## Current Status

🚧 **In Development**
- Frontend UI: ✅ Complete
- Backend API: 🔄 In Progress
- ML Model Integration: 🔄 In Progress
- Testing: ⏳ Pending

---

## Contact & Support

- **Email**: support@potatodiseasedetector.ke
- **Phone**: +254 700 000 000
- **Location**: Kenya

For bug reports and feature requests, please open an issue in the GitHub repository.

---

## License

This project is licensed under the [LICENSE](../LICENSE) file. See the LICENSE file for more details.

---

## Acknowledgments

- Created for Kenyan farmers and agricultural extension officers
- Built to improve crop yields and reduce pesticide overuse through accurate disease diagnosis
- Community-driven development for accessible agricultural technology

---

**Last Updated**: February 2026
