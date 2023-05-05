import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

type LoanHomePresenterProps = {
  actionDetail: any
}

const LoanHomePresenter = ({ actionDetail }: LoanHomePresenterProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={actionDetail}>
        <Text style={styles.text}>LoanHomePresenter</Text>
      </TouchableOpacity>
    </View>
  )
}

export default LoanHomePresenter

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'khaki',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0010FF',
  },
})
