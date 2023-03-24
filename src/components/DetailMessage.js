import { View, Text } from 'react-native'
import React, { useEffect } from 'react'

export default function DetailMessage({ route, navigation }) {
    // console.log(route.params)

    const { full_name } = route.params
    // console.log(full_name)

    console.log(navigation.setOptions)

    useEffect(() =>{
        navigation.setOptions({ title: full_name })
    }, [])
  return (
    <View>
      <Text>DetailMessage</Text>
    </View>
  )
}