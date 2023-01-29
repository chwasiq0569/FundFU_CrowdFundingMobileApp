import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const UpdatesTabContent = () => {
    return (<>
        <Text style={styles.projectTitle}>NFT Marketplace Application</Text>
        <View style={styles.updatesContainer}>
            <View style={styles.updateContainer}>
                <View style={styles.updateHeader}>
                    <Text style={styles.updateHead}>10k Reached!!!</Text>
                    <Text style={styles.secondaryText}>June 6, 2022</Text>
                </View>
                <Text style={[styles.secondaryText, styles.details]}>We’ve hit our first search goal of 10k! Couldn’t be happier that people seem excited about my first book and kickstarter.</Text>
                <View style={styles.commentsAndLikes}>
                    <View style={styles.commentContainer}>
                        <Feather name="message-circle" size={24} color="white" />
                        <Text style={styles.reactCount}>123</Text>
                    </View>
                </View>
            </View>
            <View style={styles.updateContainer}>
                <View style={styles.updateHeader}>
                    <Text style={styles.updateHead}>10k Reached!!!</Text>
                    <Text style={styles.secondaryText}>June 6, 2022</Text>
                </View>
                <Text style={[styles.secondaryText, styles.details]}>We’ve hit our first search goal of 10k! Couldn’t be happier that people seem excited about my first book and kickstarter.</Text>
                <View style={styles.commentsAndLikes}>
                    <View style={styles.commentContainer}>
                        <Feather name="message-circle" size={24} color="white" />
                        <Text style={styles.reactCount}>123</Text>
                    </View>
                </View>
            </View>
            <View style={styles.updateContainer}>
                <View style={styles.updateHeader}>
                    <Text style={styles.updateHead}>10k Reached!!!</Text>
                    <Text style={styles.secondaryText}>June 6, 2022</Text>
                </View>
                <Text style={[styles.secondaryText, styles.details]}>We’ve hit our first search goal of 10k! Couldn’t be happier that people seem excited about my first book and kickstarter.</Text>
                <View style={styles.commentsAndLikes}>
                    <View style={styles.commentContainer}>
                        <Feather name="message-circle" size={24} color="white" />
                        <Text style={styles.reactCount}>123</Text>
                    </View>
                </View>
            </View>
            <View style={styles.updateContainer}>
                <View style={styles.updateHeader}>
                    <Text style={styles.updateHead}>10k Reached!!!</Text>
                    <Text style={styles.secondaryText}>June 6, 2022</Text>
                </View>
                <Text style={[styles.secondaryText, styles.details]}>We’ve hit our first search goal of 10k! Couldn’t be happier that people seem excited about my first book and kickstarter.</Text>
                <View style={styles.commentsAndLikes}>
                    <View style={styles.commentContainer}>
                        <Feather name="message-circle" size={24} color="white" />
                        <Text style={styles.reactCount}>123</Text>
                    </View>
                </View>
            </View>
        </View>
    </>);
}

const styles = StyleSheet.create({
    projectTitle: {
        fontSize: 16,
        color: "white",
        fontFamily: 'PoppinsSemiBold',
    },
    updateContainer: {
        width: '100%',
        backgroundColor: '#202A4F',
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 5,
        marginVertical: 10
    },
    updateHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    updateHead: {
        fontSize: 14,
        color: "white",
        fontFamily: 'PoppinsSemiBold',
    },
    secondaryText: {
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
        fontFamily: 'PoppinsRegular',
    },
    details: {
        marginVertical: 8
    },
    commentsAndLikes: {
        flexDirection: 'row'
    },
    commentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20
    },
    reactCount: {
        paddingHorizontal: 5,
        color: 'white',
        fontFamily: 'PoppinsRegular',
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
    userProfile: {
        width: "100%",
        flexDirection: "row",
        alignItems: 'center',
        marginVertical: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    profileDetails: {
        marginLeft: 10
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

export default UpdatesTabContent;