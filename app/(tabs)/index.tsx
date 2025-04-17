
import "../../global.css"
import { StyleSheet } from 'react-native';
import { Text, View, ActivityIndicator } from 'react-native';
import { useLocation } from '../../hooks/useLocation';
import { getWeather } from '../../utils/getWeather';
import CurrentWeatherCard from "../../components/currentWeatherCard";
import { useState, useEffect } from 'react';
import { Image } from "react-native";
import { ImageBackground } from "react-native";

export default function Home() {
  const { location, errorMsg } = useLocation();
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    if (!location) return;

    const { latitude, longitude } = location.coords; // grab variables from expo location

    getWeather(latitude, longitude) // hand expo location coords to getWeather()
      .then(
        setWeather
      ) // getWeather() returns weather data, now store it in state
      .catch((err) => console.log('❌ Failed to set weather:', err));
  }, [location]) // useEffect runs whenever location changes

  return (
    <ImageBackground
      source={require('../../assets/images/clouds-background.jpeg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 items-center justify-center bg-white/50">
        <Text className="absolute top-40 left-0 right-0 text-center text-2xl font-bold text-gray-800 mb-10">🌤️ Expo Weather Dashboard 🌧️</Text>

        {/* show error if location was denied */}
        {errorMsg && <Text className='text-red-500'>{errorMsg}</Text>}

        {/* show location or loading */}
        {location ? (
          weather ? (
            <CurrentWeatherCard
              name={weather.name}
              icon={weather.icon}
              description={weather.description}
              temp={weather.temp}
              humidity={weather.humidity}
              temp_min={weather.temp_min}
              temp_max={weather.temp_max}
              rain={weather.rain}
              snow={weather.snow}
            />
          ) : (
            <Text>Loading weather...</Text>
          )
        ) : (
          !errorMsg && <View className="flex flex-col">
            <ActivityIndicator size="large" color="#1e3a8a" />
            <Text className="font-bold text-xl animate-pulse mt-4">
              Fetching weather data...
            </Text>
          </View>
        )}

        {/* dev mode */}
        {/* <CurrentWeatherCard
          name='weather name'
          icon='weather icon'
          description='weather description'
          temp={15}
          humidity={13}
          temp_min= {7}
          temp_max= {18}
          rain= {2}
          snow= {0}
        /> */}

      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#04adef',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: 150
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
