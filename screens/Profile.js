import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import ArialFont from "../assets/arial-cufonfonts/ARIAL.TTF";
import { Font } from "expo";
import { useFonts } from 'expo-font';
import CustomTabs from '../components/CustomTabs';

export default function Profile({ navigation }) {
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
            <View style={styles.profileDetails}>
                <Image source={require('../assets/dummyimage.png')} style={styles.profilePicture} resizeMode="cover" />
                <Text style={styles.userFullName}>Wasiq Abdullah</Text>
                <View style={styles.userDetails}>
                    <Text style={styles.userPrimaryDetails}>Backed 252 Projects  </Text>
                    <Text style={styles.userSecondaryDetails}>Joined Nov 2022</Text>
                </View>
            </View>
            <CustomTabs tabsList={["Backed", "Likes", "Projects"]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#150C27"
    },
    profileDetails: {
        width: "100%",
        alignItems: "center",
        marginTop: 40,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    userFullName: {
        fontSize: 18,
        color: "white",
        fontFamily: 'PoppinsSemiBold',
        marginTop: 20
    },
    userDetails: {
        flexDirection: "row",
        alignItems: 'center',
    },
    userPrimaryDetails: {
        color: "white",
        fontSize: 12,
        fontFamily: 'PoppinsSemiBold',
    },
    userSecondaryDetails: {
        fontSize: 10,
        color: "white",
        color: "rgba(255, 255, 255, 0.7)",
    }
});
