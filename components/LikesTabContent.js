import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const LikesTabContent = () => {
    return (<>
        <Image source={require('../assets/nolikes.png')} style={styles.nobackedprojectsImg} resizeMode="contain" />
        <Text style={styles.noProjectText}>No Liked Projects. Go and Explore the Projects & Add them to your Liked List.</Text>
        <TouchableOpacity>
            <View style={styles.getStartedBtn}>
                <Text style={styles.btnText}>Get Started</Text>
            </View>
        </TouchableOpacity>
    </>);
}

const styles = StyleSheet.create({
    nobackedprojectsImg: {
        width: 250,
        height: 250,
    },
    noProjectText: {
        paddingHorizontal: 30,
        textAlign: "center",
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
        marginVertical: 27
    },
    getStartedBtn: {
        width: 144,
        height: 41,
        backgroundColor: "rgba(32, 42, 79, 0.7)",
        borderRadius: 25,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    btnText: {
        fontFamily: 'Arial',
        fontWeight: "700",
        fontSize: 14,
        color: "rgba(255, 255, 255, 0.7)"
    }
});

export default LikesTabContent;