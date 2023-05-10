import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Fragment } from 'react'

import RNExampleModule, { Counter, LoanExample } from 'rn-lib-example'
import Splashscreen from '../screen/Splashscreen'
import TestingRouter from './TestingRouter'
import LoanModule from './LoanModule'

const CoreModule = () => {
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash'>
        
        {LoanExample({Stack})}
        <Stack.Screen component={Splashscreen} name='splash' />
        {/* {LoanModule()} */}
        {TestingRouter()}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default CoreModule
