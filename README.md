
# 🌤️ Expo Weather Dashboard

<p align="center">
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" />
  <img src="https://img.shields.io/badge/React%20Native-20232a?style=for-the-badge&logo=react&logoColor=61dafb" />
  <img src="https://img.shields.io/badge/TypeScript-3178c6?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/TailwindCSS-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/OpenWeather_API-orange?style=for-the-badge&logo=cloudflare&logoColor=white" />
</p>

A few years ago, I made a [weather dashboard](https://github.com/Mo2207/Weather-Dashboard) using the [OpenWeather API](https://openweathermap.org/) with plain JavaScript. This project is a modern refresh — a mobile weather app built with [**Expo**](https://expo.dev/), [**React Native**](https://reactnative.dev/), [**TypeScript**](https://www.typescriptlang.org/), and [**Tailwind CSS (NativeWind)**](https://www.nativewind.dev/). It pulls real-time weather data based on the user's location and shows the current conditions, temperature, humidity, and any rain or snow. I built it as a way to start learning Expo and get hands-on with React Native.

---

## 🚀 Features

- 📍 Fetches your current location using `expo-location`
- 🌦️ **Displays**:
  - Temperature
  - Weather condition icon + description
  - Rain/snow (if any)
  - Min/max temperature and humidity
- 🗓️ **5-Day Forecast**
  - View upcoming weather conditions for the next 5 days
  - Includes temperature trends and weather descriptions for each day
- 🌙 **Dark Mode Toggle**
  - Easily switch between light and dark themes
  - Dynamically updates background, text, and card colors based on the selected theme
  - Theme state is globally managed with React Context for a consistent experience across screens
- ⚖️ **Unit Toggle (Metric / Imperial)**
  - Switch between Celsius & Fahrenheit for temperature
  - Updates API calls based on selected unit
  - Unit state managed globally via React Context for consistency across the app
- 🎨 Clean, mobile-friendly UI with Tailwind + NativeWind
- ⚙️ Fully written in TypeScript

---

## 🛠️ Tech Stack

- [Expo](https://expo.dev/)
- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS (NativeWind)](https://www.nativewind.dev/)
- [OpenWeather API](https://openweathermap.org/api)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)

## 📱 Deployed Application

You can try out the app instantly using the QR code below in the [Expo Go app](https://expo.dev/go):

<img src="/assets/images/eas-QR.png" alt="QR Code for Expo Weather Dashboard" width="200" />
