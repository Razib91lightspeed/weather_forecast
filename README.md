# 🌦 Weather Forecast Dashboard

A web-based Weather Data Dashboard that displays environmental sensor data such as:

- Wind Speed
- Light Intensity
- Rain
- Temperature
- Wind Direction

The application provides tab-based navigation, data tables, and interactive charts using Chart.js.

---

## 🔗 GitHub Repository

Clone the project:

    git clone https://github.com/Razib91lightspeed/weather_forecast.git

Repository Link:
https://github.com/Razib91lightspeed/weather_forecast.git

---

## 📂 Project Structure

    weather_forecast/
    │
    ├── index.html
    ├── style.css
    ├── script.js
    ├── razib1.png
    └── README.md

---

## 🚀 Features

### 1️⃣ Latest Measurements
Displays the most recent fetched weather data in table format.

---

### 2️⃣ Wind Speed Page
- Dropdown selection for:
  - Now
  - 24 hours
  - 48 hours
  - 72 hours
  - 1 week
- Displays:
  - Table view
  - Line chart using Chart.js

---

### 3️⃣ Light Measurements
- Time interval selection
- Table data
- Interactive light intensity chart

---

### 4️⃣ Contact Info
Displays:
- Profile image
- Name
- Contact information
- LinkedIn profile
- University details

---

### 5️⃣ Other Measurements
Dynamic data selection:
- Rain
- Wind Speed
- Wind Direction
- Light
- Temperature

User can:
- Select data type
- Select time interval
- View table results

---

## 🛠 Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- Chart.js (via CDN)

Chart.js CDN:

    https://cdn.jsdelivr.net/npm/chart.js

---

## 🧠 How It Works

### Tab Navigation
Each button triggers:

    openTab(event, 'pageX')

This hides other pages and shows the selected one.

---

### Data Interval Selection
Dropdown menus trigger:

    changeInterval(event, dataType)

This updates:
- Data table
- Chart visualization

---

### Chart Rendering
Charts are rendered using:

    <canvas id="windSpeedChart"></canvas>
    <canvas id="lightsChart"></canvas>

Chart.js dynamically updates based on selected data.

---

## ▶️ How to Run

Since this is a frontend-only project:

Option 1:
Open `index.html` directly in your browser.

Option 2 (Recommended):
Use a local server:

    npx serve

or

    python -m http.server

Then open:

    http://localhost:3000
    or
    http://localhost:8000

---

## 📊 Dashboard Overview

The interface contains:

- Tab-based navigation
- Data tables
- Interactive charts
- Time filtering
- Responsive layout

---

## 🎓 Learning Objectives

This project demonstrates:

- DOM manipulation
- Event handling
- Dynamic chart rendering
- UI tab switching
- Data visualization
- Structured frontend architecture

---

## 🔮 Possible Improvements

- Add backend API integration
- Add real-time auto-refresh
- Add authentication
- Improve UI responsiveness
- Add dark/light mode
- Use a framework (React/Vue)
- Store historical data in database

---

## 👨‍💻 Author

Razib Hasan  
Software Engineering Student  
Tampere University of Applied Sciences  
Finland  

LinkedIn:
https://www.linkedin.com/in/razibhasan2/

---

## 📜 License

Educational project for course assignment.
