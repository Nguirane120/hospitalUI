import { StyleSheet } from "react-native";
import { PADDING } from "../../../utils";

export const doctorStyele = StyleSheet.create({
    cardConatainer:{
        paddingVertical: 15,
        paddingHorizontal: 15
    },
    doctorCard:{
        flexDirection: 'row',
        marginBottom: 15,
        elevation: 5,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    doctorStyle:{
        width: 80,
        height: 80,
        borderRadius: 80/2
    },
    doctorInfo:{
        flexDirection: 'column',
        padding: 15
    },
    speciality:{
        backgroundColor: '#4000FF',
        color: 'white',
        padding: 5,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginTop: 2,
        fontSize: 14
    }

})