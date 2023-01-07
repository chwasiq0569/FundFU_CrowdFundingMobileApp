import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import ArialFont from "../assets/arial-cufonfonts/ARIAL.TTF";
import { Font } from "expo";
import { useFonts } from 'expo-font';

export default function SplashScreen() {
    const [loaded] = useFonts({
        Arial: require('../assets/fonts/arial2.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        loaded &&
        <View style={styles.container}>
            <Image source={require('../assets/FundFU.png')} style={styles.logoImage} resizeMode="contain" />
            <View style={styles.formContainer}>
                <TouchableOpacity>
                    <View style={styles.customPrimaryBtn}>
                        <Text style={styles.primaryBtnText}>Continue with Google</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.customSecondaryBtn}>
                        <Text style={styles.secondaryBtnText}>Login with Email</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.secondaryText}>New to FundFU? Sign up</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.secondaryTextPrivacyPolicy}>By clicking signup, continue with Google, you agree the platforms terms of use, privacy policy and cookie policy</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#150C27"
    },
    logoImage: {
        width: 231,
        height: 113,
        marginVertical: 110
    },
    // formContainer: {
    //     marginVertical: 100
    // },
    customPrimaryBtn: {
        width: 302,
        height: 50,
        backgroundColor: "#7032FF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    primaryBtnText: {
        fontFamily: 'Arial',
        fontWeight: "700",
        fontSize: 14,
        color: "white"
    },
    customSecondaryBtn: {
        width: 302,
        height: 50,
        backgroundColor: "#2A2C33",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 18
    },
    secondaryBtnText: {
        fontFamily: 'Arial',
        fontWeight: "700",
        fontSize: 14,
        color: "white"
    },
    secondaryText: {
        fontFamily: 'Arial',
        fontWeight: "400",
        fontSize: 10,
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "center",
        marginHorizontal: 44
    },
    secondaryTextPrivacyPolicy: {
        position: "absolute",
        bottom: 18,
        fontFamily: 'Arial',
        fontWeight: "400",
        fontSize: 10,
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "center",
        marginHorizontal: 44
    }
});
