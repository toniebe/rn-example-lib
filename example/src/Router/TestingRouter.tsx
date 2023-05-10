import React from 'react'
import Example from '../screen/Example'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {LoanDetailContainer,LoanHomeContainer} from 'rn-lib-example'

const ExampleRouter = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Group>
      <Stack.Screen component={Example} name='Example' />
    </Stack.Group>
  )
}

export default ExampleRouter
