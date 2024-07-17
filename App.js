import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Screens/Home";
import CuciAjaScreen from "./Screens/CuciAjaScreen";


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CuciAjaScreen" component={CuciAjaScreen} />
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

