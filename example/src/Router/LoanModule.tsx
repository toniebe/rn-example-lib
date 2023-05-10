import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {LoanDetailContainer,LoanHomeContainer} from 'rn-lib-example'


const LoanModule = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Group>
      <Stack.Screen component={LoanHomeContainer} name='LoanHome' />
      <Stack.Screen component={LoanDetailContainer} name='LoanDetail' />
    </Stack.Group>
  )
}

export default LoanModule
