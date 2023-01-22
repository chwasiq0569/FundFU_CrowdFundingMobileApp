import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import ArialFont from "../assets/arial-cufonfonts/ARIAL.TTF";
import { Font } from "expo";
import { useFonts } from 'expo-font';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomTabs from '../components/CustomTabs';
import OverviewTabContent from '../components/OverviewTabContent';

export default function BackProject({ navigation }) {
    const insets = useSafeAreaInsets();

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
        <View style={[styles.container, {
            paddingTop: insets.top,
        }]}>
            <View style={styles.topbar}>
                <Image source={require('../assets/backicon.png')} style={styles.backBtn} resizeMode="contain" />
                <Text style={styles.primaryText}>NFT Marketplace Application</Text>
            </View>
            <Image source={require('../assets/projectcover.png')} style={styles.projectCover} resizeMode="cover" />
            <CustomTabs tabsList={["Overview", "FAQ", "Updates"]} contentList={[<OverviewTabContent />]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#150C27",
    },
    topbar: {
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        paddingHorizontal: 20
    },
    backBtn: {
        width: 17,
        height: 17,
        marginRight: 20
    },
    primaryText: {
        color: "white",
        fontFamily: 'PoppinsRegular',
    },
    projectCover: {
        width: "100%",
        height: 246,
        marginVertical: 20
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
        fontFamily: 'Arial',
        fontWeight: "700",
        fontSize: 14,
        color: "white"
    },
    // customSecondaryBtn: {
    //     width: 302,
    //     height: 50,
    //     backgroundColor: "#2A2C33",
    //     borderRadius: 25,
    //     justifyContent: "center",
    //     alignItems: "center",
    //     marginVertical: 18
    // },
    // secondaryBtnText: {
    //     fontFamily: 'Arial',
    //     fontWeight: "700",
    //     fontSize: 14,
    //     color: "white"
    // },
    secondaryText: {
        fontFamily: 'Arial',
        fontWeight: "400",
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.5)",
        textAlign: "center",
        marginHorizontal: 44
    }
});
