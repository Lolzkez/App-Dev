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
import { Iconify } from 'react-native-iconify'
import Cart from './pages/Cart';

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
        <Stack.Screen name = "Cart" component={Cart} />
      </Stack.Navigator>}
    </NavigationContainer>
  );
}

const Tab = createBottomTabNavigator()

function Tabs() {
  return(
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          
          if (route.name === "Home") {
            if (focused) {return <Iconify icon={'clarity:home-solid'} size={size} color={color} />}
            else {return <Iconify icon={'clarity:home-line'} size={size} color={color} />}
          }
          else if (route.name === "Market") {
            if (focused) {return <Iconify icon={'clarity:book-solid'} size={size} color={color} />}
            else {return <Iconify icon={'clarity:book-line'} size={size} color={color} />}
          }
          else if (route.name === "My Books") {
            if (focused) {return <Iconify icon={'clarity:bookmark-solid'} size={size} color={color} />}
            else {return <Iconify icon={'clarity:bookmark-line'} size={size} color={color} />}
          }
          else if (route.name === "Settings") {
            if (focused) {return <Iconify icon={'clarity:settings-solid'} size={size} color={color} />}
            else {return <Iconify icon={'clarity:settings-line'} size={size} color={color} />}
          }
        },
      })}>
        <Tab.Screen name = "Home" component={Home} options={{headerShown:false}}/>
        <Tab.Screen name = "Market" component={Market} options={{headerShown:false}} />
        <Tab.Screen name = "My Books" component={MyBooks} options={{headerShown:false}} />
        <Tab.Screen name = "Settings" component={Settings} options={{headerShown:false}} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}