//import Libraries

import React from 'react';

//import third party
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import screens
import Calculator from './src/Calculator';

function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Calculator"
          options={{
            headerShown: false,
          }}
          component={Calculator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//make component available to app
export default App;
