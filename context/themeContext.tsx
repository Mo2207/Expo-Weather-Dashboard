
import { createContext, useContext, useState } from 'react';
import { View } from 'react-native';
import { themes } from '../context/theme';

// defines a default value of ThemeContext
const ThemeContext = createContext({
  theme: 'light' as 'light' | 'dark',
  toggleTheme: () => {},
  colors: themes.light,
});

// manages and changes the actual state of the theme ('light | 'dark')
const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // must be either 'light' | 'dark', defaults to 'light

  // simple theme-toggler function will be handed to the provider
  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    // anything wrapped in this provider has access to the current state 'theme' 
    // and the function to switch it 'toggleTheme'
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: themes[theme] }}> 
      {/* children is whatever you want to have the context, in this case the entire app. See 'app/(drawer)/_layout.tsx' */}
      <View style={{ flex: 1, backgroundColor: theme === 'dark' ? '#000' : '#fff' }}>
        {children}
      </View> 
    </ThemeContext.Provider>
  );
};

// shortcut function to access ThemeContext in other files
const useTheme = () => useContext(ThemeContext);

// export both the context (shape and default value of ThemeContext)
// and the provider (to manage and change the actual state of theme)
export { useTheme, ThemeProvider };
