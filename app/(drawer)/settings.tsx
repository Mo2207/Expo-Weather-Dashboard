
import { View, ImageBackground } from 'react-native';
import { useTheme } from '../../context/themeContext';
import ThemedText from '../../components/themedText';
import ThemedSwitch from '../../components/themedSwitch';
import { useUnit } from '../../context/unitContext';

export default function Settings() {
  const { theme, toggleTheme, colors } = useTheme();
  const { unit, toggleUnit } = useUnit();

  return (
    <ImageBackground
      source={require('../../assets/images/clouds-background.jpeg')}
      style={{ flex: 1 }}
      resizeMode="cover"
    >
      <View className="flex flex-col items-center justify-center h-full" style={{ backgroundColor: colors.image }}>

        <View className='flex flex-col items-center rounded-lg p-6 w-[90%]' style={{ backgroundColor: colors.background }}>

          <ThemedText className="text-2xl font-bold mb-4">
            Settings
          </ThemedText>

          {/* dark/light mode setting */}
          <View className='flex flex-row items-center'>
            <ThemedText>
              {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
            </ThemedText>
            <ThemedSwitch
              value={theme === 'dark'}
              onToggle={toggleTheme}
            />
          </View>

          {/* temperature unit setting */}
          <View className='flex flex-row items-center'>
            <ThemedText>
              {unit.charAt(0).toUpperCase() + unit.slice(1)}
            </ThemedText>
            <ThemedSwitch
              value={unit === 'imperial'}
              onToggle={toggleUnit}
            />
          </View>

        </View>

      </View>
    </ImageBackground>
  );
}