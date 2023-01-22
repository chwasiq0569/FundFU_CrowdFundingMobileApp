import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const OverviewTabContent = () => {
    return (<>
        <Text style={styles.projectTitle}>NFT Marketplace Application</Text>
        <Text style={styles.projectDetails}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's...</Text>
        <View style={styles.progressAndDetails}>
            <View style={styles.progressContainer}>
                <View style={styles.progress}></View>
            </View>
            <View style={styles.detailsContainer}>
                <View style={styles.individualDetail}>
                    <Text style={[styles.detailHead, styles.progressPercentage]}>85%</Text>
                    <Text style={[styles.detailDull, styles.progressPercentage]}>funded</Text>
                </View>
                <View style={[styles.individualDetail, styles.centerDetails]}>
                    <Text style={styles.detailHead}>128</Text>
                    <Text style={styles.detailDull}>Backers</Text>
                </View>
                <View style={styles.individualDetail}>
                    <Text style={styles.detailHead}>43</Text>
                    <Text style={styles.detailDull}>hours to go</Text>
                </View>
            </View>
        </View>
        {/* <Image source={require('../assets/nolikes.png')} style={styles.nobackedprojectsImg} resizeMode="contain" />
        <Text style={styles.noProjectText}>No Liked Projects. Go and Explore the Projects & Add them to your Liked List.</Text>
        <TouchableOpacity>
            <View style={styles.getStartedBtn}>
                <Text style={styles.btnText}>Get Started</Text>
            </View>
        </TouchableOpacity> */}
    </>);
}

const styles = StyleSheet.create({
    nobackedprojectsImg: {
        width: 250,
        height: 250,
    },
    projectTitle: {
        fontSize: 16,
        color: "white",
        fontFamily: 'PoppinsSemiBold',
    },
    projectDetails: {
        textAlign: "justify",
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
    },
    progressAndDetails: {
        paddingVertical: 10
    },
    progressContainer: {
        width: "100%",
        height: 3,
        backgroundColor: '#D9D9D9',
        marginVertical: 10
    },
    progress: {
        position: 'relative',
        width: '80%',
        height: '100%',
        backgroundColor: '#6744F6'
    },
    detailsContainer: {
        flexDirection: "row",
    },
    centerDetails: {
        marginHorizontal: 30
    },
    detailHead: {
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: 'PoppinsSemiBold',
        fontSize: 14,
        color: 'white'
    },
    progressPercentage: {
        color: '#6744F6'
    },
    detailDull: {
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
        color: 'white'
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

export default OverviewTabContent;