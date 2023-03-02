import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        backgroundColor: '#1f1e25',

        borderRadius: 5,

        marginBottom: 10,
        

    },
    name: {
        color: '#fff',
        fontSize: 16,
        marginLeft: 16,
        flex: 1
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,

        backgroundColor: '#e23c44',

        alignItems: 'center',
        justifyContent: "center"

    },
    buttonText: {
        color: '#fff',
        fontSize: 36,
    }
})