import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { activityStyle } from './activityStyle'
import Svg, { Path } from "react-native-svg"
// import { TouchableOpacity } from 'react-native-gesture-handler'
import SVG from '../../../assets/hospi.svg'
// import Svg, { Path } from "react-native-svg"

export default function ActivityList({activity}) {
  return (
    <TouchableOpacity style={activityStyle.items}>
        <Svg width={60} height={60} viewBox="0 0 20 20"
        stroke={'#ff4500'}
        fillRule={'evenodd'}
        >
            <SVG/>
        </Svg>
      <Text style={activityStyle.doctorName}>{activity.doctorName}</Text>
      <Text style={activityStyle.domaine}>{activity.domaine}</Text>
    </TouchableOpacity>
  )
}