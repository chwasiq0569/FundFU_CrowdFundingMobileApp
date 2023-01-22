import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import SignIn from './screens/SignIn';
import SplashScreen from './screens/SplashScreen';
import { createNavigationContainerRef, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from './screens/Feed';
import Messages from './screens/Messages';
import Profile from './screens/Profile';
import BackProject from './screens/BackProject';
import { useRoute } from '@react-navigation/native';
import BottomNavigation from './components/BottomNavigation';
import { useNavigationState } from '@react-navigation/native';
// const screenName = useNavigationState((state) => state.routes[state.index].name)
export const navigationRef = createNavigationContainerRef();

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="BackProject" independent={true} component={BackProject} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
      {/* <BottomNavigation navigationRef={navigationRef} /> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // bottomNavigationContainer: {
  //   width: "100%",
  //   height: 46,
  //   position: "absolute",
  //   bottom: 32,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   backgroundColor: "rgba(52, 52, 52, 0.0)"
  // },
  // bottomNavigation: {
  //   width: "90%",
  //   height: 50,
  //   backgroundColor: "white",
  //   borderRadius: 25,
  //   flexDirection: "row",
  //   justifyContent: "space-evenly",
  //   alignItems: "center"
  // }
})
