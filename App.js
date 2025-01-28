import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './utils/AuthContext';
import Navigation from './navigation/Navigation';

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Navigation/>
      </NavigationContainer>
    </AuthProvider>
  );
}