import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView } from 'react-native';

const Feed = () => {
    return (<SafeAreaView style={styles.container}>
        <ScrollView horizontal={true} style={styles.tagsContainer}>
            <View style={styles.tag}><Text>Newest</Text></View>
            <View style={styles.tag}><Text>Ending Soon</Text></View>
            <View style={styles.tag}><Text>Arts</Text></View>
            <View style={styles.tag}><Text>Design & Tech</Text></View>
            <View style={styles.tag}><Text>Comics</Text></View>
        </ScrollView>
        <ScrollView>
            <View style={styles.feedPost}>

            </View>
        </ScrollView>
    </SafeAreaView>);
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#150C27",
        paddingTop: StatusBar.currentHeight,
    },
    tagsContainer: {
        flexDirection: "row",
        backgroundColor: "#150C27",
        // justifyContent: "space-evenly"
    },
    tag: {
        height: 30,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        marginHorizontal: 8,
    }


});

export default Feed;