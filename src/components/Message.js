import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { chats } from '../../fakeData/chats'
import MessageList from './MessageList'

export default function Message({navigation}) {
  return (
    <FlatList data={chats} 
    keyExtractor={item => item.id}
    renderItem={({ item}) => {
        return <MessageList item={item} navigation={navigation}/>
    }}
    alwaysBounceVertical={true}
    style={{ paddingHorizontal: 10, paddingVertical: 70 }}
    />
  )
}