import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import Recipes from './app/screens/Recipes';

const Stack = createNativeStackNavigator();

export default function App() {

  // onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //   if (user) {

  //   } else {

  //   }
  // });
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    onAuthStateChanged
  })

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Recipes'>
        <Stack.Screen name="My Todos" component={List} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recipes" component={Recipes} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}