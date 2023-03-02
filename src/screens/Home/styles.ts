import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    title: {
      color: '#fff',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    subTitle: {
      color: '#6B6B6B',
      fontSize: 16,
      marginTop: 2
    },
    form: {
      width: '100%',
      flexDirection: 'row',

      marginTop: 36,
      marginBottom: 42,
  },
  input: {
      height: 56,
      flex: 1,
      backgroundColor: '#1f1e25',
      color: '#fff',

      borderRadius: 5,
      padding: 16,
      marginRight: 12,
      fontSize: 16,
  },
  button: {
      width: 56,
      height: 56,
      borderRadius: 5,

      backgroundColor: '#31cf67',

      alignItems: 'center',
      justifyContent: "center"

  },
  buttonText: {
      color: '#fff',
      fontSize: 36,
  },
    listEmptyText: {
      color: '#fff',
      fontSize: 14,
      textAlign: 'center',

    }
  })