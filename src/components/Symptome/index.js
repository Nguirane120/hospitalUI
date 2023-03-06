import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { symptomeStyle } from './styleSymptome'

export default function Symptomes({symptome}) {
  return (
    <TouchableOpacity>
    <View style={symptomeStyle.symptomelist}>
    <Image source={require('../../../assets/image.png')} style={symptomeStyle.image}/>
      <Text>{symptome.libelle}</Text>
    </View>
    </TouchableOpacity>
  )
}