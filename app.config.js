
import 'dotenv/config';

export default {
  expo: {
    name: 'Expo Weather Dashboard',
    slug: 'expo-weather-dashboard',
    version: '1.0.0',
    extra: {
      OPEN_WEATHER_API_KEY: process.env.OPEN_WEATHER_API_KEY,
      eas: {
        projectId: 'ce664ffb-ea49-4537-b7ca-a96d43518bac',
      },
    },
    updates: {
      url: 'https://u.expo.dev/ce664ffb-ea49-4537-b7ca-a96d43518bac',
    },
    runtimeVersion: {
      policy: 'appVersion',
    },
  },
};
