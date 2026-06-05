import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './types';

// =========================================
// Importe suas screens aqui
// =========================================
// import HomeScreen from '../screens/HomeScreen';
// import ProfileScreen from '../screens/ProfileScreen';
// import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={} // ← coloque o nome da tela inicial ex: "Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#0A0A0F',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 17,
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        contentStyle: { backgroundColor: '#0A0A0F' },
      }}
    >
      {/* =========================================
          Registre suas screens aqui
          ========================================= */}

      {/* <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Início' }} /> */}
      {/* <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Perfil' }} /> */}
      {/* <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Configurações' }} /> */}

    </Stack.Navigator>
  );
}
