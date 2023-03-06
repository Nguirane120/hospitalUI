import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { activityStyle } from './activityStyle'
import Svg, { Path } from "react-native-svg"
import { SvgXml } from 'react-native-svg';
// import { TouchableOpacity } from 'react-native-gesture-handler'
// import Svg, { Path } from "react-native-svg"
// import hospi from '../../assets/hospi.svg

export default function ActivityList({activity}) {
  return (
    <TouchableOpacity style={activityStyle.items}>
      {/* <SvgXml xml={hospi} /> */}
      <Image source={require('../../../assets/svg.png')} style={activityStyle.image}/>

      <Text style={activityStyle.doctorName}>{activity.doctorName}</Text>
      <Text style={activityStyle.domaine}>{activity.domaine}</Text>
    </TouchableOpacity>
  )
}