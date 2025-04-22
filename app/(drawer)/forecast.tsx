
import { View, Text, ActivityIndicator, ImageBackground } from 'react-native';
import { useLocation } from '../../hooks/useLocation';
import { useState, useEffect } from 'react';
import { getForecast } from '@/utils/getForecast';
import ForecastCard from '../../components/forecastCard';
import { ScrollView } from 'react-native-gesture-handler';

export default function FiveDayForecast() {
  const { location, errorMsg } = useLocation();
  const [forecast, setForecast] = useState<any>(null);

  useEffect(() => {
    if (!location) return;

    const { latitude, longitude } = location.coords;

    getForecast(latitude, longitude)
      .then(
        setForecast
      )
      .catch((err) => console.log('❌ Failed to set forecast:', err));
  }, [location])

  return (
    <ImageBackground
      source={require('../../assets/images/clouds-background.jpeg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex flex-col items-center justify-center bg-white/50">
        {/* show error if location was denied */}
        {errorMsg && <Text className='text-red-500'>{errorMsg}</Text>}

        {/* show location or loading */}
        {location ? (
          forecast ? (
            <ScrollView showsVerticalScrollIndicator={false} className="w-full px-6" >
                {forecast.forecast.map((day: any, i: number) => (
                  <ForecastCard
                    key={i}
                    name={forecast.name}
                    day={day.day}
                    date={day.date}
                    temp={day.temp}
                    icon={day.icon}
                    description={day.description}
                    rain={day.rain}
                    snow={day.snow}
                  />
                ))}
            </ScrollView>
          ) : (
            <Text>Loading forecast...</Text>
          )
        ) : (
                !errorMsg && 
                <View className="flex flex-col">
                  <ActivityIndicator size="large" color="#1e3a8a" />
                  <Text className="font-bold text-xl animate-pulse mt-4">
                    Fetching weather data...
                  </Text>
                </View>
              )}
      
      </View>
    </ImageBackground>
  );
}