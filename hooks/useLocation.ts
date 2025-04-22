
import * as Location from 'expo-location';
import { useEffect, useState } from "react";

export function useLocation() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null)
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      // console.log('⏳ Requesting permission for location...');
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('❌ Location permission denied ');
        setErrorMsg('Permission to access location was denied');
        return;
      }

      try {
        // console.log('⏳ Getting current position...')
        const currentLocation = await Location.getCurrentPositionAsync(); // gets longitude and latitude coords
        setLocation(currentLocation); // updates state with coords
        // console.log('✅ Location retrieved!');
      } catch (err) {
        console.log('❌ Failed to get current position', err);
        setErrorMsg('❌ Failed to get current location');
      }
    })();
    
  }, [])

  return { location, errorMsg }; // returns longitude and latitude coords for location and errorMsg
}