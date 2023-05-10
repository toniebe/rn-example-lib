/* eslint-disable react/react-in-jsx-scope */
import React from 'react'

import LoanDetailContainer from './container/LoanDetailContainer'
import LoanHomeContainer from './container/LoanHomeContainer'
const LoanExample = ({ Stack }: any) => {
  return (
    <Stack.Group>
      <Stack.Screen component={LoanHomeContainer} name='LoanModuleHome' />
      <Stack.Screen component={LoanDetailContainer} name='LoanModuleDetail' />
    </Stack.Group>
  )
}

export default LoanExample
