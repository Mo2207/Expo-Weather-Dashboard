
import { View, ActivityIndicator, ImageBackground } from 'react-native';
import ThemedText from '../../components/themedText';
import { useLocation } from '../../hooks/useLocation';
import { useState, useEffect, useLayoutEffect } from 'react';
import { getForecast } from '@/utils/getForecast';
import ForecastCard from '../../components/forecastCard';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from 'expo-router';
import { useTheme } from '../../context/themeContext';
import { useUnit } from '@/context/unitContext';

export default function FiveDayForecast() {
  const { colors } = useTheme();
  const { location, errorMsg } = useLocation();
  const [forecast, setForecast] = useState<any>(null);
  const navigation = useNavigation();
  const { unit } = useUnit(); 

  // change menu title dynamically
  useLayoutEffect(() => {
    if (forecast?.name) {
      navigation.setOptions({
        title: `5 Day Forecast for ${forecast.name}`
      })
    }
  }, [forecast]); // run whenever forecast changes

  // set forecast based on location
  useEffect(() => {
    if (!location) return;

    const { latitude, longitude } = location.coords;

    getForecast(latitude, longitude, unit)
      .then(
        setForecast
      )
      .catch((err) => console.log('❌ Failed to set forecast:', err));
  }, [location, unit]) // run whenever location or unit changes

  return (
    <ImageBackground
      source={require('../../assets/images/clouds-background.jpeg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex flex-col items-center justify-center h-full" style={{ backgroundColor: colors.image }}>
        
        {/* show error if location was denied */}
        {errorMsg && <ThemedText>{errorMsg}</ThemedText>}

        {/* show location or loading */}
        {location ? (
          forecast ? (
            <ScrollView 
              showsVerticalScrollIndicator={false} 
              className="w-full px-6"
              contentContainerStyle={{
                paddingVertical: 8,
                paddingBottom: 8,
              }}
            >
                {forecast.forecast.map((day: any, i: number) => (
                  <ForecastCard
                    key={i}
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
            <ThemedText>Loading...</ThemedText>
          )
        ) : (
                !errorMsg && 
                <View className="flex flex-col">
                  <ActivityIndicator size="large" color={colors.text} />
                  <ThemedText className="font-bold text-xl animate-pulse mt-4">
                    Fetching 5 Day Forecast...
                  </ThemedText>
                </View>
              )}
      
      </View>
    </ImageBackground>
  );
}