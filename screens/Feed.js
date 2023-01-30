import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import BottomNavigation from '../components/BottomNavigation';

const Feed = ({ navigation }) => {

    const [post, setPosts] = React.useState([1, 2, 3, 4, 5]);

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

    return (loaded && <SafeAreaView style={styles.container}>
        <ScrollView horizontal={true} style={styles.tagsContainer}>
            <TouchableOpacity>
                <Text style={styles.tag}><Text style={styles.tagText}>Newest</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tag}><Text style={styles.tagText}>Ending Soon</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tag}><Text style={styles.tagText}>Arts</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.tag}><Text style={styles.tagText}>Design & Tech</Text></Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={styles.tag}><Text style={styles.tagText}>Comics</Text></View>
            </TouchableOpacity>
        </ScrollView>
        <ScrollView style={styles.postsContainer}>
            {
                post.map((item, i) => (
                    <TouchableOpacity key={item} onPress={() => navigation.navigate("BackProject")}>
                        <View style={i == post.length - 1 ? [styles.feedPost, styles.lastFeedStyle] : styles.feedPost}>
                            <Image source={require('../assets/download.jpg')} style={styles.feedPostCover} resizeMode="cover" />
                            <View style={styles.feedContent}>
                                <Text style={styles.postHeadText}>Dark Fantasy Narrative Art Book</Text>
                                <Text style={styles.postDetailsText}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type...</Text>
                                <View style={styles.progressBarContainer}>
                                    <View style={styles.progress}></View>
                                </View>
                                <View style={styles.postStats}>
                                    <View style={styles.postStat}>
                                        <Text style={[styles.statPrimaryText, styles.statFocusPrimaryText]}>85%</Text>
                                        <Text style={[styles.statSecondaryText, styles.statFocusSecondaryText]}>funded</Text>
                                    </View>
                                    <View style={styles.postStat}>
                                        <Text style={styles.statPrimaryText}>128</Text>
                                        <Text style={styles.statSecondaryText}>Backers</Text>
                                    </View>
                                    <View style={styles.postStat}>
                                        <Text style={styles.statPrimaryText}>43</Text>
                                        <Text style={styles.statSecondaryText}>hours to go</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                ))
            }
        </ScrollView>
        <BottomNavigation navigation={navigation} />
    </SafeAreaView>);
}


const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        backgroundColor: "#150C27",
        paddingTop: StatusBar.currentHeight,
        padding: 8,
        justifyContent: "flex-start",
    },
    tagsContainer: {
        maxHeight: 40,
        flexDirection: "row",
        backgroundColor: "#150C27",
    },
    tag: {
        height: 30,
        backgroundColor: "white",
        paddingHorizontal: 20,
        paddingVertical: 5,
        borderRadius: 15,
        marginRight: 8,
    },
    tagText: {
        fontFamily: 'PoppinsMedium',
        fontSize: 12
    },
    postsContainer: {
        flex: 1,
    },
    feedPost: {
        backgroundColor: '#202A4F',
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20
    },
    lastFeedStyle: {
        marginBottom: 90
    },
    feedPostCover: {
        width: "100%",
        height: 164,
        resizeMode: "cover"
    },
    feedContent: {
        paddingVertical: 8,
        paddingHorizontal: 11
    },
    postHeadText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 20,
        color: "white",
    },
    postDetailsText: {
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
        color: "rgba(255, 255, 255, 0.7)",
    },
    progressBarContainer: {
        flex: 1,
        height: 5,
        backgroundColor: "white",
        position: "relative",
        marginVertical: 8
    },
    progress: {
        position: "absolute",
        width: "80%",
        height: "100%",
        backgroundColor: '#6744F6'
    },
    postStats: {
        flexDirection: "row",
    },
    postStat: {
        marginRight: 25
    },
    statPrimaryText: {
        fontFamily: 'PoppinsSemiBold',
        fontSize: 12,
        color: "white",
    },
    statSecondaryText: {
        fontFamily: 'PoppinsRegular',
        fontSize: 12,
        color: "white",
    },
    statFocusPrimaryText: {
        color: "#6744F6",
    },
    statFocusSecondaryText: {
        color: "#6744F6",
    },
});

export default Feed;