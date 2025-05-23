
import "../../global.css"
import { View, ActivityIndicator } from 'react-native';
import { useLocation } from '../../hooks/useLocation';
import { getWeather } from '../../utils/getWeather';
import CurrentWeatherCard from "../../components/currentWeatherCard";
import { useState, useEffect } from 'react';
import { ImageBackground } from "react-native";
import ThemedText from "../../components/themedText";
import { useTheme } from "../../context/themeContext";
import { useUnit } from "@/context/unitContext";

export default function Home() {
  const { colors } = useTheme()
  const { location, errorMsg } = useLocation();
  const [weather, setWeather] = useState<any>(null);
  const { unit } = useUnit(); 

  useEffect(() => {
    if (!location) return;

    const { latitude, longitude } = location.coords; // grab variables from expo location

    getWeather(latitude, longitude, unit) // hand expo location coords to getWeather()
      .then(
        setWeather
      ) // getWeather() returns weather data, now store it in state
      .catch((err) => console.log('❌ Failed to set weather:', err));
  }, [location, unit]) // useEffect runs whenever location or unit changes

  return (
    <ImageBackground
      source={require('../../assets/images/clouds-background.jpeg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex-1 items-center justify-center h-full" style={{ backgroundColor: colors.image }}>
        <ThemedText className="absolute top-40 left-0 right-0 text-center text-2xl font-bold mb-10">🌤️ Expo Weather Dashboard 🌧️</ThemedText>

        {/* show error if location was denied */}
        {errorMsg && <ThemedText>{errorMsg}</ThemedText>}

        {/* show location or loading */}
        {location ? (
          weather ? (
            <CurrentWeatherCard
              name={weather.name}
              icon={weather.icon}
              description={weather.description}
              temp={weather.temp}
              temp_min={weather.temp_min}
              temp_max={weather.temp_max}
              rain={weather.rain}
              snow={weather.snow}
            />
          ) : (
            <ThemedText>Loading...</ThemedText>
          )
        ) : (
          !errorMsg && <View className="flex flex-col">
            <ActivityIndicator size="large" color={colors.text} />
            <ThemedText className="font-bold text-xl animate-pulse mt-4">
              Fetching Current Forecast...
            </ThemedText>
          </View>
        )}

      </View>
    </ImageBackground>
  );
}