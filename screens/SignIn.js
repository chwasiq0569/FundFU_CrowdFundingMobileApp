import React from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
// import ArialFont from "../assets/arial-cufonfonts/ARIAL.TTF";
import { Font } from "expo";
import { useFonts } from 'expo-font';

export default function SignIn({ navigation }) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    const [loaded] = useFonts({
        Arial: require('../assets/fonts/arial2.ttf'),
        PoppinsMedium: require('../assets/fonts/Poppins-Medium.ttf'),
        PoppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
        PoppinsThin: require('../assets/fonts/Poppins-Thin.ttf'),
        PoppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    return (
        loaded &&
        <View style={styles.container}>
            <Image source={require('../assets/FundFU.png')} style={styles.logoImage} resizeMode="contain" />
            <View style={styles.formContainer}>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Email"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        onChangeText={(email) => setEmail(email)}
                    />
                </View>
                <View style={styles.inputViewPass}>
                    <TextInput
                        style={styles.TextInput}
                        placeholder="Password"
                        placeholderTextColor="rgba(255, 255, 255, 0.5)"
                        onChangeText={(password) => setPassword(password)}
                    />
                </View>
                <TouchableOpacity>
                    <View style={email.length > 0 && password.length > 0 ? styles.customPrimaryBtn : styles.customSecondaryBtn}>
                        <Text onPress={() => navigation.navigate("Feed")} style={styles.secondaryBtnText}>Login</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.secondaryText}>Already have an account? Sign In</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        backgroundColor: "#150C27",
        justifyContent: "center",
    },
    logoImage: {
        width: 231,
        height: 113,
        marginBottom: 60,
    },
    inputView: {
        width: 302,
        height: 50,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: "2A2C33",
        justifyContent: "center",
        paddingHorizontal: 8,
    },
    inputViewPass: {
        width: 302,
        height: 50,
        borderColor: "rgba(255, 255, 255, 0.5)",
        borderStyle: "solid",
        borderWidth: 2,
        borderRadius: 8,
        backgroundColor: "2A2C33",
        justifyContent: "center",
        paddingHorizontal: 8,
        marginVertical: 18
    },
    TextInput: {
        fontFamily: 'PoppinsMedium',
        color: "rgba(255, 255, 255, 0.5)",
    },
    customPrimaryBtn: {
        width: 302,
        height: 50,
        backgroundColor: "#7032FF",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    primaryBtnText: {
        fontFamily: 'PoppinsMedium',
        // fontWeight: "700",
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
    },
    secondaryBtnText: {
        fontFamily: 'PoppinsMedium',
        // fontWeight: "500",
        fontSize: 14,
        color: "white"
    },
    secondaryText: {
        fontFamily: 'PoppinsMedium',
        fontWeight: "400",
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "center",
        marginHorizontal: 30,
        marginVertical: 15
    }
});
