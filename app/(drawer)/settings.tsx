
import { View, ImageBackground } from 'react-native';
import { useTheme } from '../../context/themeContext';
import ThemedText from '../../components/themedText';
import ThemedSwitch from '../../components/themedSwitch';

export default function Settings() {
  const { theme, toggleTheme, colors } = useTheme();

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

          {/* dark/light mode settings */}
          <View className='flex flex-row items-center'>
            <ThemedText>
              {theme.charAt(0).toUpperCase() + theme.slice(1)} Mode
            </ThemedText>
            <ThemedSwitch
              onToggle={toggleTheme}
            />
          </View>
        </View>

      </View>
    </ImageBackground>
  );
}