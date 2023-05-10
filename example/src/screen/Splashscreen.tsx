import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { navigationProps } from '../../../src/types/navigationProps'

const Splashscreen = ({ navigation }: navigationProps) => {
  return (
    <View style={styles.container}>
      <Text>Splashscreen</Text>
      <Button
        title='to loan'
        onPress={() => navigation.navigate('LoanModuleDetail')}
      />
      <Button
        title='to loan home'
        onPress={() => navigation.navigate('LoanModuleHome')}
      />
      <Button
        title='to loan detail'
        onPress={() => navigation.navigate('Example')}
      />
    </View>
  )
}

export default Splashscreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
