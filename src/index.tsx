import { NativeModules } from 'react-native'

import { Counter } from './components/counter'
import LoanDetailContainer from './container/LoanDetailContainer'
import LoanHomeContainer from './container/LoanHomeContainer'
import LoanExample from './Router'

export { Counter, LoanExample }
export { LoanDetailContainer, LoanHomeContainer }

export default NativeModules.RNExampleModule
