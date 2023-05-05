import React, { useEffect } from 'react'
import RNExampleModule, { Counter, LoanModule } from 'rn-lib-example'

const App = () => {
  useEffect(() => {
    console.log(RNExampleModule)
  })

  // return <Counter />
  return <LoanModule />
}

export default App
