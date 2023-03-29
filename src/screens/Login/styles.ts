import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24,

        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        width: '90%',
        height: '30%',
        backgroundColor: '#1f1e25',
        borderRadius: 8,

        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',

    },
    input: {
        width: '80%',
        height: 56,
        backgroundColor: '#131016',
        color: '#f8f8f8',
  
        borderRadius: 5,
        padding: 16,

        fontSize: 16,
        marginBottom: 16
    },

    button: {
        width: '80%',
        height: 56,
        borderRadius: 5,
  
        backgroundColor: '#31cf67',
  
        alignItems: 'center',
        justifyContent: "center"

    },

    buttonText: {

    }
})