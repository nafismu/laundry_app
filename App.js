import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import CuciAjaScreen from "./Screens/CuciAjaScreen";
import Login from "./Screens/LoginScreen";
import Register from "./Screens/CreateAccountScreen";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Register">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CuciAjaScreen" component={CuciAjaScreen} />
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Register" component={Register}/>
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

