import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { messageStyle } from './messageStyle'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.locale('fr')

dayjs.extend(relativeTime)

export default function MessageList({item, navigation}) {


  return (
    <TouchableOpacity style={ messageStyle.messageContainer}
    onPress={() => navigation.navigate('MessageDetail')}
    >
      <Image
       source={ require('../../assets/doctor.png')}
       style={messageStyle.messageImg}
       />
       <View style={messageStyle.messageInfo}>
        <View style={ messageStyle.date_name}>
        <Text style={ messageStyle.name}>{item.full_name }</Text>
        <Text>{dayjs(item.date).fromNow()}</Text>
        </View>
        <Text style={messageStyle.lasTmessage}>{item.last_message}</Text>
       </View>
    </TouchableOpacity>
  )
}