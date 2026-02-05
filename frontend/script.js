// script.js

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {

    // Image form submit
    const imageForm = document.getElementById("imageForm");
    imageForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const imageInput = document.getElementById("imageInput");
        const formData = new FormData();
        formData.append("image", imageInput.files[0]);

        try {
            // Replace with your Flask backend endpoint
            const response = await fetch("http://localhost:5000/predict_image", {
                method: "POST",
                body: formData
            });

            const data = await response.json();
            displayResult(data);
        } catch (error) {
            console.error("Error:", error);
            displayResult({prediction: "Error connecting to backend."});
        }
    });

    // Text form submit
    const textForm = document.getElementById("textForm");
    textForm.addEventListener("submit", async (e) => {
        e.preventDefault();

        const textInput = document.getElementById("textInput").value;

        try {
            // Replace with your Flask backend endpoint
            const response = await fetch("http://localhost:5000/predict_text", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({symptoms: textInput})
            });

            const data = await response.json();
            displayResult(data);
        } catch (error) {
            console.error("Error:", error);
            displayResult({prediction: "Error connecting to backend."});
        }
    });

    // Function to display predictions
    function displayResult(data) {
        const resultDiv = document.getElementById("predictionResult");
        // Adjust keys depending on what your backend returns
        resultDiv.innerHTML = `
            <p><strong>Disease Prediction:</strong> ${data.prediction}</p>
            <p><strong>Recommendation:</strong> ${data.recommendation || "N/A"}</p>
        `;
    }
});
