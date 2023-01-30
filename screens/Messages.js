import React from 'react';
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import ArialFont from "../assets/arial-cufonfonts/ARIAL.TTF";
import { Font } from "expo";
import { useFonts } from 'expo-font';
import BottomNavigation from '../components/BottomNavigation';

export default function Messages({ navigation }) {
    const [loaded] = useFonts({
        Arial: require('../assets/fonts/arial2.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf'),
        PoppinsSemiBold: require('../assets/fonts/Poppins-SemiBold.ttf'),
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        loaded &&
        <View style={styles.container}>
            <Text style={styles.pageHead}>Messages</Text>
            <View style={styles.conversationsContainer}>
                {
                    [1, 2, 3, 4, 5].map(item => (
                        <TouchableOpacity key={item}>
                            <View style={styles.conversation}>
                                <Image source={require('../assets/download.jpg')} style={styles.userProfile} resizeMode="cover" />
                                <View style={styles.textContainer}>
                                    <View>
                                        <Text style={styles.primaryText}>Tom Latham</Text>
                                        <Text style={styles.secondaryText}>You: Hello </Text>
                                    </View>
                                    <View>
                                        <Text style={styles.secondaryText}>now</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    ))
                }

            </View>
            <BottomNavigation navigation={navigation} />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#150C27",
        paddingTop: StatusBar.currentHeight,
        padding: 20,
    },
    pageHead: {
        color: 'white',
        fontSize: 16,
    },
    conversationsContainer: {
        marginTop: 15,
    },
    conversation: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
    },
    userProfile: {
        width: 55,
        height: 55,
        borderRadius: 50
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginLeft: 14
    },
    primaryText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'PoppinsSemiBold',
    },
    secondaryText: {
        color: "rgba(255, 255, 255, 0.7)",
    }
});
