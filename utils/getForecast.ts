
import Constants from 'expo-constants';
import { format } from 'date-fns';

const API_KEY = Constants?.expoConfig?.extra?.OPEN_WEATHER_API_KEY; // api key
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast'; // api endpoint

export async function getForecast(lat: number, long: number) {
  try {
    const url = `${BASE_URL}?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`; // create the full api url
    const res = await fetch(url);
    const data = await res.json();

    // error handling
    if (!res.ok) {
      throw new Error(data.message || 'Failed to get forecast');
    }

    const dailyMap: Record<string, any[]> = {}; // create object { date: [entries] }

    data.list.forEach((entry: any) => {
      const rawDate = entry?.dt_txt?.split(' ')[0]; // format date into year-month-day
      if (!rawDate) return; 

      if (!dailyMap[rawDate]) {
        dailyMap[rawDate] = [];
      }
      dailyMap[rawDate].push(entry);
    })

    const forecast = Object.entries(dailyMap)
      .slice(0, 5)
      .map(([rawDate, entries]) => {
        const mid_entry = entries[Math.floor(entries.length/2)];
        const dateObj = new Date(rawDate);

        return {
          day: format(dateObj, 'EEEE'), // 'Monday'
          date: format(dateObj, 'MMM do'), // 'Apr 21st'
          temp: Math.round(mid_entry.main.temp),
          description: mid_entry.weather[0].description,
          icon: mid_entry.weather[0].icon,
          rain: mid_entry.rain?.['3h'] ?? null,
          snow: mid_entry.snow?.['3h'] ?? null,
        }
      })

    return {
      name: data.city.name,
      forecast
    }
  } catch (error) {
    console.log('❌ Forecast fetch error:', error)
    throw error;
  }

}