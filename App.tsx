import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Chivo_400Regular, Chivo_700Bold, Chivo_900Black } from '@expo-google-fonts/chivo';
import { Background } from './src/components/Background';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Chivo_400Regular,
    Chivo_700Bold,
    Chivo_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Background>
      <StatusBar style="light" backgroundColor="transparent" translucent />
      <Routes />
    </Background>
  );
}
