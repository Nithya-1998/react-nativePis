import { StyleSheet } from 'react-native';
import { block } from 'react-native-reanimated';
export const globalstyles = StyleSheet.create({
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        justifyContent: "center"
    },
    containerStyle: {
        padding: 20,
        flex: 1,
        backgroundColor: 'skyblue'
    },
    detail:{
        margin: 10,
        color:'white',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: "center"
    },
    touchButtonContainer: {
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 20,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: "center"
    },
    saveButton:{
        backgroundColor: '#3498DB',
        padding: 10,
        margin: 10,
        fontSize:20,
        fontWeight:'bold',
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: "center"
    },
    textInput: {
        height: 40,
        borderColor: 'grey',
        borderRadius: 5
    
    },
    card:{
        backgroundColor: 'skyblue',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        flexDirection: 'column',
        justifyContent: "center"
    },
    error:{
        borderWidth:3,
        borderColor:'red'
    }

});