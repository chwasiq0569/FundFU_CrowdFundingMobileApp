import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const createList = (list) => {
    return list.map((l, i) => {
        return { id: i, title: l, active: i == 0 ? true : false };
    });
};

const CustomTabs = ({ tabsList }) => {
    const list = tabsList;
    const [tabs, setTabs] = React.useState(createList(list))
    const [tabSelected, setTabSelected] = React.useState("");

    const selectItem = (selectedItem) => {
        setTabSelected(selectedItem);
        let updatedList = tabs.map((item) =>
            item.id === selectedItem.id
                ? { ...selectedItem, active: true }
                : { ...item, active: false }
        );
        setTabs(updatedList);
    };

    return (<View style={styles.customTabsContainer}>
        <View style={styles.tabContainer}>
            {tabs.map(item => <Text key={item?.id} onPress={() => selectItem(item)} style={item?.active ? [styles.tabStyles, styles.tabStylesActive] : styles.tabStyles}>{item?.title}</Text>)}
        </View>
        <ScrollView horizontal={false} contentContainerStyle={styles.tabContent} >
            <Image source={require('../assets/nobackedprojects.png')} style={styles.nobackedprojectsImg} resizeMode="contain" />
            <Text style={styles.noProjectText}>No Projects yet, but if you have great ideas. You could start a project today to make your ideas come to life.</Text>
            <TouchableOpacity>
                <View style={styles.getStartedBtn}><Text style={styles.btnText}>Get Started</Text></View>
            </TouchableOpacity>
        </ScrollView>
    </View>);
}

const styles = StyleSheet.create({
    customTabsContainer: {
        flex: 1
    },
    tabContainer: {
        flexDirection: "row",
        marginTop: 20,
    },
    tabStyles: {
        paddingHorizontal: 10,
        marginHorizontal: 5,
        paddingVertical: 5,
        color: "white",
        fontFamily: 'PoppinsRegular',
        fontSize: 12
    },
    tabStylesActive: {
        borderBottomWidth: 2,
        borderBottomColor: "white",
    },
    tabContent: {
        flexGrow: 1,
        alignItems: "center",
        paddingBottom: 120
    },
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

export default CustomTabs;