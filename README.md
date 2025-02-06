# 🌦️ Weather App - Your Personal Weather Dashboard  

## 📌 Project Overview  

The **Weather App** is a web-based application built using **React.js** that provides real-time weather updates for any city worldwide. It fetches data from the **OpenWeatherMap API** and displays important weather details like **temperature, humidity, wind speed, and weather conditions**. The app updates automatically every 30 seconds to ensure you always have the latest weather information.  

This project showcases expertise in **React fundamentals**, **API integration**, **state management using Context API**, **custom hooks**, and **real-time data polling**. 

**Live Demo**:[Click Here](https://weatherforcasting.vercel.app/)

---

## 🚀 Key Features  

✅ **Real-Time Weather Data**: Get live weather updates for any city.  
✅ **Auto-Refresh Every 30 Seconds**: Ensures data remains up-to-date.  
✅ **Search Functionality**: Easily find the weather for different cities.  
✅ **Weather Conditions & Icons**: Displays relevant weather conditions like **Sunny, Rainy, Cloudy, etc.** along with icons.  
✅ **Temperature, Humidity & Wind Speed**: Provides detailed weather parameters.  
✅ **Dark Mode & Light Mode**: User-friendly UI with theme switching.  
✅ **Local Storage**: Saves the last searched city and reloads data on revisiting the app.  
✅ **Error Handling**: Proper error messages for incorrect city names, API failures, or network issues.  
✅ **Responsive Design**: Fully optimized for **mobile, tablet, and desktop** views.  

---

## 📸 Screenshots  

### 🌍 Home Page  
![Home Page](././src/Images//Screenshot%20(414).png)  

### 🔎 Search for a City  
![Search Feature](././src/Images/Screenshot%20(415).png)  
---

## 🛠️ Technologies Used  

The project is built using **modern frontend technologies**, ensuring a seamless and efficient user experience:  

- **React.js** – Component-based UI development.  
- **React Hooks** – `useState`, `useEffect`, and `useContext` for state management.  
- **Context API** – Manages global state efficiently.  
- **Axios** – Handles API requests.  
- **Styled Components / CSS Modules** – For modular and scalable styling.  
- **OpenWeatherMap API** – Fetches real-time weather data.  

---

## 🌍 API Integration  

This app fetches weather data from the **OpenWeatherMap API**. You must register and obtain a free API key from:  
🔗 [https://openweathermap.org/api](https://openweathermap.org/api)  

### **Example API Call**  
```js
fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error fetching weather data:', error));
