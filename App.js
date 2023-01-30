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
import React from 'react';
// const screenName = useNavigationState((state) => state.routes[state.index].name)
export const navigationRef = createNavigationContainerRef();

export default function App() {
  let Stack = createNativeStackNavigator();
  // React.useEffect(() => {
  //   navigationRef = createNavigationContainerRef();
  // }, [navigationRef])
  console.log(navigationRef)

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="SplashScreen" independent={true} component={SplashScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Feed" component={Feed} />
        <Stack.Screen name="BackProject" component={BackProject} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Messages" component={Messages} />
      </Stack.Navigator>
      {/* {navigationRef && <BottomNavigation navigationRef={navigationRef} />} */}
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
