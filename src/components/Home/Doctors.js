import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { fakeDoctor } from '../../../fakeData/doctor'
import { doctorStyele } from './doctorStyle'

export default function Doctors() {
 
  return (
    <View style={doctorStyele.cardConatainer}>

        {
            fakeDoctor.slice(0, 3).map((item) =>{
              console.log(item.img)
                return(
                        <TouchableOpacity key={item.id} style={doctorStyele.doctorCard}>
                          <Image source={require('../../../assets/images.jpeg')}  style={doctorStyele.doctorStyle}/>
                        <View style={doctorStyele.doctorInfo}>
                        <Text style={{ fontWeight: 'bold' }}>{item.fullName}</Text>
                          <Text style={ doctorStyele.speciality}>{item.specilay}</Text>
                        </View>
                        </TouchableOpacity>
                       
                    )
            })
        }
    </View>
  )
}