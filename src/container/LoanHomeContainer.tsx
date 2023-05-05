import React from 'react'

import LoanHomePresenter from '../presenter/LoanHomePresenter'
import { navigationProps } from '../types/navigationProps'

const LoanHomeContainer = ({ navigation }: navigationProps) => {
  return (
    <LoanHomePresenter actionDetail={() => navigation.navigate('LoanDetail')} />
  )
}

export default LoanHomeContainer
