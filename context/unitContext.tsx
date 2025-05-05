
import { createContext, useContext, useState } from "react";

// defines a default value of ThemeContext
const UnitContext = createContext({
  unit: 'metric' as 'metric' | 'imperial',
  toggleUnit: () => {}
})

const UnitProvider = ({ children } : {children: React.ReactNode}) => {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

  const toggleUnit = () => {
    setUnit(prev => (prev === 'metric' ? 'imperial' : 'metric'))
  };

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
        {children}
    </UnitContext.Provider>
  )
}

const useUnit = () => useContext(UnitContext);

export { useUnit, UnitProvider }