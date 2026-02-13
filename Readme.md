# 📚 Academic Session Effectiveness Analyzer

A mini academic management system that allows users to:

- 📅 Select a date from a calendar  
- 🗓 View the daily timetable  
- 🔀 Auto-generate random subjects per day  
- ⭐ Provide feedback using a 5-star rating system  

---

## 🚀 Features

✔ Calendar-based date selection  
✔ Deterministic subject generation (Same day = Same subjects)  
✔ Interactive timetable view  
✔ Clickable subjects  
✔ Feedback page with star rating  
✔ Clean and responsive UI  

---

## 🛠 Technologies Used

- **HTML5** – Structure  
- **CSS3** – Styling  
- **JavaScript (Vanilla JS)** – Logic & Interactivity  

---

## 📂 Project Structure

Academic-Session-Effectiveness-Analyzer/
│
├── calendar.html
├── day.html
├── feedback.html
├── script.js
├── README.md
└── .gitignore


---

## 🧠 How It Works

### 1️⃣ Calendar Page
- User selects a date.
- The selected year, month, and date are passed via URL parameters.

### 2️⃣ Day Page
- Reads URL parameters using `URLSearchParams`.
- Generates subjects using **seeded shuffle logic**.
- Same date → Same subjects.
- Different date → Different subjects.

### 3️⃣ Feedback Page
- Clicking a subject redirects to the feedback page.
- Displays selected subject.
- User rates using ⭐ 1–5 star system.

---

## 🎯 Seeded Random Logic

To ensure:
- The same day does NOT reshuffle on refresh
- Different days have different subject combinations

A **date-based seed** is used to shuffle subjects consistently.

---

## 📌 Future Enhancements

- 💾 Store ratings using LocalStorage  
- 🗄 Connect to Node.js backend  
- 🛢 Store feedback in MySQL  
- 📊 Display analytics dashboard  
- 🔐 Add authentication system  

---

## 👨‍💻 Developed For

Mini Project – Academic Session Analysis System  

---

## 🏁 How to Run

1. Download or clone the repository  
2. Open `calendar.html` in your browser  
3. Select a date  
4. Explore the timetable and give feedback  

---

## ⭐ Project Status

✔ Frontend Complete  
🔜 Backend Integration (Planned)

---

