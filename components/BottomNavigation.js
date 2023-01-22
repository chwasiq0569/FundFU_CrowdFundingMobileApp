import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const BottomNavigation = (props) => {
    const [notAllowedRoutes, setNotAllowedRoutes] = React.useState(['BackProject']);
    console.log('aaa', notAllowedRoutes.find(item => item == props?.navigationRef?.current?.getCurrentRoute()?.name))
    console.log('xa', props?.navigationRef?.current?.getCurrentRoute())
    return (notAllowedRoutes.find(item => item == props?.navigationRef?.current?.getCurrentRoute()?.name) ? <></> : <View style={styles.bottomNavigationContainer}>
        <View style={styles.bottomNavigation}>
            <TouchableOpacity>
                <MaterialCommunityIcons name="home-outline" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Ionicons name="search-sharp" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <Feather name="message-circle" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name="notifications-none" size={28} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
                <FontAwesome5 name="user" size={22} color="black" />
            </TouchableOpacity>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    bottomNavigationContainer: {
        width: "100%",
        height: 46,
        position: "absolute",
        bottom: 32,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(52, 52, 52, 0.0)"
    },
    bottomNavigation: {
        width: "90%",
        height: 50,
        backgroundColor: "white",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})



export default BottomNavigation;