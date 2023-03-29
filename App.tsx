import { StatusBar } from 'react-native'

import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";

import { Routes } from './src/routes/index'

export default function App(){
  return(
    <>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    </>

  )
}

