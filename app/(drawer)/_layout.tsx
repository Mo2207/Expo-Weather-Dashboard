import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useColorScheme } from '@/components/useColorScheme';
import { Drawer } from 'expo-router/drawer';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function DrawerLayout() {
  const colorScheme = useColorScheme();

  return (
    <Drawer 
      screenOptions={{
        drawerActiveTintColor: '#2563eb',
        drawerPosition: 'right'
      }}
    >
      <Drawer.Screen
        name='index'
        options={{
          drawerLabel: 'Home',
          title: 'Home'
        }}
      />
      <Drawer.Screen
        name='forecast'
        options={{
          drawerLabel: '5 Day Forecast',
          title: '5 Day Forecast'
        }}
      />
    </Drawer>
  );
}
