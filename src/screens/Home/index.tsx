import { useState } from 'react'
import { View, Text, Alert, FlatList, TextInput, TouchableOpacity } from 'react-native'
import { Participant } from '../../components/Participant'
import { styles } from './styles'

export function Home(){
    const [participants, setParticipants] = useState<string[]>([])
    const [participantName, setParticipantName] = useState('')

    // const participants = ['rodrigo', 'athena', 'davi', 'nyx', 'lara']

    function handleParticipantAdd(){
        if(participants.includes(participantName)){
          return Alert.alert("Participante existente", "ja existe um participante na lista com esse nome")
        }

        setParticipants(prevState => [...prevState, participantName])
        setParticipantName('')
    }

    function handleParticipantRemove(name: String){


        Alert.alert("Remover", `Deseja remover o participante ${name}`, [
            {
                text: 'sim',
                onPress: () => {
                    setParticipants(prevState => prevState.filter( participant =>  participant !== name))
                    Alert.alert("Deletado!")
                }
            },
            {
                text: 'nao',
                style: 'cancel'
            }
        ])
    }



    return(
        <View style={styles.container}>
            <Text style={styles.title} >Nome do evento</Text>
            <Text style={styles.subTitle}>Sexta, 3 de março de 2023</Text>

            <View style={styles.form}>
                <TextInput
                    style={styles.input} 
                    placeholder="Nome do participante"
                    placeholderTextColor="#6b6b6b"
                    onChangeText={e => setParticipantName(e)}
                    value={participantName}
                />
                <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList 
                data={participants} 
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant
                    key={item} 
                    name={item} 
                    onRemove={() => handleParticipantRemove(item)} 
                /> 
                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda? Adicione participantes a sua lista de presença.
                    </Text>
                )}
                />
                
        </View>
    )
}
