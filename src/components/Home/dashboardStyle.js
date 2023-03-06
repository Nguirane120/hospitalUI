import { StyleSheet } from "react-native";
import { PADDING } from "../../../utils";

export const dashboardStyele = StyleSheet.create({
    header:{
       flexDirection: 'row',
       justifyContent: 'space-between',
       alignItems: 'center',
       paddingHorizontal: PADDING.horizontal,
       paddingVertical: PADDING.vertical,
       marginTop: 30,
       backgroundColor: '#fff'

    },
    userImg:{
        width: 50,
        height: 50,
        // marginTop: 15,
        borderRadius: 50/2,
    },
    userName:{
        fontSize: 15
    },
    scrollableList:{
        paddingHorizontal: PADDING.horizontal,
        paddingVertical: PADDING.vertical
    },
    symptomeTitie:{
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    doctors:{
        paddingHorizontal: 15,
        paddingVertical: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    doctorTitle:{
        fontWeight: 'bold'
    }
})