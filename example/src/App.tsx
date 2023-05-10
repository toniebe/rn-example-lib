import React, { Fragment, useEffect } from 'react'
import RNExampleModule, { Counter} from 'rn-lib-example'
import CoreModule from './Router/CoreModule'
import { SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  useEffect(() => {
    console.log(RNExampleModule)
  })

  // return <LoanRouter />
  return <CoreModule />
}

export default App
