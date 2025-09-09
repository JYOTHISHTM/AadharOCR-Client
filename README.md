# Aadhaar OCR – Client (Frontend)

This is the **frontend (client)** of the Aadhaar OCR system.  
It is built with **React.js (Vite)** and provides a simple UI for uploading Aadhaar card images, triggering OCR, and displaying the extracted information.  

---

## 🚀 Features

- Upload Aadhaar card **front and back images**.  
- Preview uploaded images on the same page.  
- Send images to backend API for OCR processing.  
- Display extracted Aadhaar details in a **clean, organized format**.  
- Responsive and user-friendly interface.  

---

## 🖥️ Tech Stack

- **React.js** (Vite)  
- **Axios** (API calls)  
- **Tailwind CSS** (UI styling)  
- Deployment → **Vercel**  

---

## 📂 Project Structure

rontend/
└── src/
├── api/
│ └── index.js
├── components/
│ ├── ImageUpload.jsx
│ └── ResultCard.jsx
├── App.jsx
├── index.css
└── main.jsx



## ⚙️ Environment Variables

Create a `.env` file in the `frontend/` folder:

```env
VITE_API_BASE_URL=http://localhost:5000



🛠️ Setup Instructions

Navigate to the frontend folder:

cd frontend


Install dependencies:

npm install


Run the development server:

npm run dev


Open the app in your browser:
http://localhost:5173

📸 Screenshots (References)

Upload Aadhaar Images

Extracted Aadhaar Data Display

📄 License

This project is licensed under the JYOTHISH T M
