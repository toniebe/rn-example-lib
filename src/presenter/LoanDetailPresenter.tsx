import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type LoanDetailPresenterProps = {
  actionBack: any
}

const LoanDetailPresenter = ({ actionBack }: LoanDetailPresenterProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textDesc}>LoanDetailPresenter</Text>
      <TouchableOpacity onPress={actionBack}>
        <Text style={styles.textBack}>Go Back</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoanDetailPresenter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDesc: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 18,
  },
  textBack: {
    color: 'pink',
    fontWeight: '700',
    fontSize: 20,
  },
})
