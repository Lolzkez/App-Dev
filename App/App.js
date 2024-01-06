import {useState, useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Login from './pages/Login'
import Splash from './pages/Splash';
import Register from './pages/Register';
import Home from './pages/Home'
import Market from './pages/Market'
import MyBooks from './pages/MyBooks'
import Settings from './pages/Settings'
import Forgot from './pages/Forgot';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])
  
  return (
    <NavigationContainer>
      {isLoading ? <Splash /> : <Stack.Navigator
      screenOptions={{ headerShown: false}}>
        <Stack.Screen name = "Login" component={Login} />
        <Stack.Screen name = "Register" component={Register} />
        <Stack.Screen name = "Home" component={Tabs} />
        <Stack.Screen name = "Forgot" component={Forgot} />
      </Stack.Navigator>}
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator()

function Tabs() {
  return(
    <NavigationContainer independent={true}>
      <Tab.Navigator>
        <Tab.Screen name = "Home" component={Home} />
        <Tab.Screen name = "Market" component={Market} />
        <Tab.Screen name = "My Books" component={MyBooks} />
        <Tab.Screen name = "Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}