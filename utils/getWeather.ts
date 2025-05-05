
import Constants from 'expo-constants';

const API_KEY = Constants?.expoConfig?.extra?.OPEN_WEATHER_API_KEY; // api key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather'; // api endpoint

export async function getWeather(lat: number, long: number, unit: 'metric' | 'imperial') {

  try {
    const url = `${BASE_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=${unit}`; // create the full api url
    const res = await fetch(url);
    const data = await res.json();

    // error handling
    if (!res.ok) {
      throw new Error(data.message || 'Failed to get weather');
    }

    return {
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      name: data.name,
      humidity: data.main.humidity,
      temp_min: data.main.temp_min,
      temp_max: data.main.temp_max,
      rain: data.rain?.['1h'] ?? null,
      snow: data.snow?.['1h'] ?? null
    }
  } catch (error) {
    console.log('❌ Weather fetch error:', error)
    throw error;
  }

}