import { useEffect, useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Alert } from "react-native";
import { styles } from './styles'
import * as LocalAuthentication from 'expo-local-authentication'

type Login = {
    navigation: any
}


export function Login({ navigation }:Login){
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function verifyAvaiableAuthentication(){
        const compatible = await LocalAuthentication.hasHardwareAsync();

        console.log(compatible)

        const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
        console.log(types.map(type => LocalAuthentication.AuthenticationType[type]))

    }

    async function handleAuthentication(){
        const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();

        if(isBiometricEnrolled === false){
            return Alert.alert('Login', 'Nenhuma biometria encontrada')
        }

        const auth = await LocalAuthentication.authenticateAsync({
            promptMessage: 'Login com biometria',
            fallbackLabel: 'Biometia não reconhecida'
        })
        setIsAuthenticated(auth.success)
    }

    useEffect(() => {
        // verifyAvaiableAuthentication()
        if(isAuthenticated === true){
            navigation.push('home')
        }
    }, [isAuthenticated])

    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TextInput
                    style={styles.input} 
                    placeholder="Nome do evento"
                    placeholderTextColor="#FFF"
                    // onChangeText={e => setParticipantName(e)}
                    // value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleAuthentication} >
                    <Text style={styles.buttonText} >Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}