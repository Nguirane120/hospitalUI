import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { dashboardStyele } from './dashboardStyle';
import { fakeData } from '../../../fakeData';
import ActivityList from './ActivityList';


export default function Home() {
  return (
    <ScrollView>
      {/* DEBUT DU HEADER */}
      <View style={dashboardStyele.header}>
        <Text style={dashboardStyele.userName}>Jhon Doe</Text>
        <Image source={require('../../../assets/index.jpeg')}
        style={dashboardStyele.userImg}
        />
        
      </View>
      {/* FIN DU HEADER */}


    {/* LIST DES ACTIVITES */}
    <FlatList horizontal={true}
    style={dashboardStyele.scrollableList}
    data={fakeData}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) =>{
      return(
        <ActivityList activity={item}/>
      )
    }}
    />

    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });