import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Home/'
import IMC from './src/IMC/'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
            options={{
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                shadowColor: 'transparent',
                backgroundColor: '#FA0D65',
              },
            }
          }
          />

        <Stack.Screen
          name="IMC"
          component={IMC}
            options={{
              headerTintColor: '#fff',
              headerTitleAlign: 'center',
              headerShadowVisible: false,
              headerStyle: {
                textAlign: 'center',
                shadowColor: 'transparent',
                backgroundColor: '#FA0D65',
              },
            }
          }
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
}



