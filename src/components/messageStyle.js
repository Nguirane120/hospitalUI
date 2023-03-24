import { StyleSheet } from "react-native";

export const messageStyle = StyleSheet.create({
    messageContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        elevation: 5,
        // paddingHorizontal: 15,
        paddingVertical: 10,
        marginBottom: 10,
        // marginTop: 30
    },
    messageImg:{
        // flex: 2,
        width: 50,
        height: 50,
        borderRadius: 50/2,
        marginBottom: 10,
        marginRight: 5,
        marginLeft: 5
    },
    messageInfo:{
        flex: 1,
        flexDirection: 'column',
        // paddingHorizontal: 15
    },
    date_name:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5

    },
    name:{
        fontWeight: 'bold',
        marginRight: 5
    },
    lasTmessage:{
        fontSize: 14,
        color: 'gray',

    }
})