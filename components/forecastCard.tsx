
import { View, Text, Image } from 'react-native';

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
  return (
    <View
      className="flex items-center flex-col bg-white rounded-lg shadow-xl shadow-black p-4 max-w-[90vw] mt-2"
    >

      {/* day and date */}
      <Text className='font-semibold text-lg'>{day}, {date} </Text>
      
      <View className="flex flex-row items-center gap-10">

        {/* temperature and precipitation */}
        <View className='flex flex-col gap-4 items-center'>
          <Text className='font-semibold text-lg'>🌡️ {temp}°C </Text>
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
                No precipitation
              </Text>
            )}
          </View>
        </View>

        {/* icon and description */}
        <View className='flex flex-col items-center'>
          <Image
            source={{ uri: `https://openweathermap.org/img/wn/${icon}@2x.png` || '' }}
            style={{ width: 60, height: 60 }}
          />
          <Text className='font-semibold text-lg'>{description}</Text>
        </View>

      </View>
    </View>
  )
}