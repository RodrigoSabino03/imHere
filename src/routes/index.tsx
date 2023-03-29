import 'react-native-gesture-handler';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../screens/Home'
import { Login } from '../screens/Login';

const Stack = createStackNavigator();

export function Routes(){
  return(
      <Stack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName="login"
            >
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="login" component={Login} />
      </Stack.Navigator>
  )
}

