import React from 'react'

import LoanDetailPresenter from '../presenter/LoanDetailPresenter'
import { navigationProps } from '../types/navigationProps'

const LoanDetailContainer = ({ navigation }: navigationProps) => {
  return <LoanDetailPresenter actionBack={() => navigation.goBack()} />
}

export default LoanDetailContainer
