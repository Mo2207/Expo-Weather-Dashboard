
import { View, Image } from 'react-native';
import ThemedText from './themedText';
import { useTheme } from '../context/themeContext';

type ForecastProps = {
  name: string;
  day: string;
  date: string;
  icon: string;
  temp: number;
  description: string;
  rain?: number | null;
  snow?: number | null;
}

export default function ForecastCard({ name, day, date, icon, temp, description, rain, snow }: ForecastProps) {
  const { colors } = useTheme();

  return (
    <View
      className="flex items-center flex-col bg-white rounded-lg shadow-sm shadow-black p-4 max-w-[90vw] my-1"
      style={{ backgroundColor: colors.background }}
    >

      {/* day and date */}
      <ThemedText className='font-semibold text-lg'>{day}, {date} </ThemedText>
      
      <View className="flex flex-row items-center gap-10">

        {/* temperature and precipitation */}
        <View className='flex flex-col gap-4 items-center h-12'>
          <ThemedText className='font-semibold text-lg'>🌡️ {temp}°C </ThemedText>
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
              <ThemedText className="font-semibold text-md mt-1">
                No precipitation
              </ThemedText>
            )}
          </View>
        </View>

        {/* icon and description */}
        <View className='flex flex-col items-center'>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` || '' }}
            style={{ width: 60, height: 60 }}
          />
          <ThemedText className='font-semibold text-lg'>{description}</ThemedText>
        </View>

      </View>
    </View>
  )
}