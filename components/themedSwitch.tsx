
import { Switch } from 'react-native';
import { useTheme } from '../context/themeContext';


type ThemedSwitchProps = {
  value: boolean;
  onToggle: () => void;
};

export default function ThemedSwitch({ value, onToggle } : ThemedSwitchProps) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <Switch
      value={value}
      onValueChange={onToggle}
      thumbColor={isDarkMode ? '#6b7280' : '#ffffff'}
      trackColor={{
        false: isDarkMode ? '#444' : '#ccc',
        true: isDarkMode ? '#a3bffa' : '#81b0ff',
      }}
    />
  );
}