import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import LoanDetailContainer from '../container/LoanDetailContainer'
import LoanHomeContainer from '../container/LoanHomeContainer'

const LoanModule = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen
          name='LoanHome'
          component={LoanHomeContainer}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='LoanDetail'
          component={LoanDetailContainer}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default LoanModule
