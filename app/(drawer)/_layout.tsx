import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { ThemeProvider, useTheme } from '../../context/themeContext';

function DrawerLayout() {
  const { colors } = useTheme();

  return (
      <Drawer
        screenOptions={{
          drawerStyle: {
            backgroundColor: colors.background, // menu background
          },
          drawerActiveTintColor: colors.activeBackground, // selected item text
          drawerInactiveTintColor: colors.text, // unselected item text
          drawerLabelStyle: {
            fontWeight: 'bold',
          },
          headerStyle: {
            backgroundColor: colors.background, // top nav bar background
          },
          headerTintColor: colors.text, // top nav bar text/icons
          drawerPosition: 'right',
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
        <Drawer.Screen
          name='settings'
          options={{
            drawerLabel: 'Settings',
            title: 'Settings'
          }}
        />
      </Drawer>
  );
}

export default function ThemedDrawerLayout() {
  return (
    <ThemeProvider>
      <DrawerLayout />
    </ThemeProvider>
  );
}
