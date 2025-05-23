
import { View, Image } from 'react-native';
import ThemedText from "../components/themedText";
import { useTheme } from "../context/themeContext";
import { useUnit } from '../context/unitContext';

type WeatherProps = {
  name: string;
  icon: string;
  description: string;
  temp: number;
  temp_min: number;
  temp_max: number;
  rain: number;
  snow: number;
}

export default function CurrentWeatherCard({ name, icon, description, temp, temp_min, temp_max, rain, snow }: WeatherProps) {
  const { colors } = useTheme();
  const { unit } = useUnit();
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <View
      className="flex items-center flex-col rounded-lg shadow-xl shadow-black p-6 gap-2 max-w-[90vw]"
      style={{ backgroundColor: colors.background }}
    >
      <ThemedText className='font-semibold text-lg'>Current forecast for {name}</ThemedText>
      <View className="flex flex-row items-center">
        <Image
          source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` || '' }}
          style={{ width: 64, height: 64 }}
        />
        <ThemedText className='font-semibold text-lg'>{description}</ThemedText>
      </View>

      {/* precipitation & temperature row */}
      <View className='flex flex-row items-center gap-6'>
        {/* precipitation col */}
        <View>
          {rain && (
            <ThemedText className="font-semibold text-lg">
              🌧️ ~{rain.toFixed(1)}mm
            </ThemedText>
          )}
          {snow && (
            <ThemedText className="font-semibold text-lg">
              🌨️ ~{snow.toFixed(1)}mm
            </ThemedText>
          )}
          {!snow && !rain && (
            <ThemedText className="font-semibold text-md">
              No current{'\n'}precipitation
            </ThemedText>
          )}
        </View>
      {/* temperature col */}
      <View className='flex flex-row gap-4 items-center'>
        <ThemedText className='font-semibold text-lg'>🌡️ {Math.round(temp)}{unitSymbol}</ThemedText>
        <View className='flex flex-col items-start'>
          <ThemedText className='font-semibold text-sm'>min {Math.round(temp_min)}{unitSymbol}</ThemedText>
          <ThemedText className='font-semibold text-sm'>max {Math.round(temp_max)}{unitSymbol}</ThemedText>
        </View>
      </View>
      </View>

    </View>
  )
}