
import { View, Text, Image } from 'react-native';

type WeatherProps = {
  name: string;
  icon: string;
  description: string;
  temp: number;
  humidity: number;
  temp_min: number;
  temp_max: number;
  rain: number;
  snow: number;
}

export default function CurrentWeatherCard({ name, icon, description, temp, humidity, temp_min, temp_max, rain, snow }: WeatherProps) {
  return (
    <View
      className="flex items-center flex-col bg-white rounded-lg shadow-xl shadow-black p-6 gap-2 max-w-[90vw]"
    >
      <Text className='font-semibold text-lg'>Current forecast for {name}</Text>
      <View className="flex flex-row items-center">
        <Image
          source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` || '' }}
          style={{ width: 64, height: 64 }}
        />
        <Text className='font-semibold text-lg'>{description}</Text>
      </View>

      {/* precipitation & temperature row */}
      <View className='flex flex-row items-center gap-6'>
        {/* precipitation col */}
        <View>
          {rain && (
            <Text className="font-semibold text-lg">
              🌧️ ~{rain.toFixed(1)}mm
            </Text>
          )}
          {snow && (
            <Text className="font-semibold text-lg">
              🌨️ ~{snow.toFixed(1)}mm
            </Text>
          )}
          {!snow && !rain && (
            <Text className="font-semibold text-md">
              No current{'\n'}precipitation
            </Text>
          )}
        </View>
      {/* temperature col */}
      <View className='flex flex-row gap-4 items-center'>
        <Text className='font-semibold text-lg'>🌡️ {temp}°C</Text>
        <View className='flex flex-col items-start'>
          <Text className='font-semibold text-sm'>min {temp_min}°C</Text>
          <Text className='font-semibold text-sm'>max {temp_max}°C</Text>
        </View>
      </View>
      </View>

    </View>
  )
}