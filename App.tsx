import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import Login from './app/screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {

  // onAuthStateChanged(FIREBASE_AUTH, (user) => {
  //   if (user) {

  //   } else {

  //   }
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="My Todos" component={List} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}