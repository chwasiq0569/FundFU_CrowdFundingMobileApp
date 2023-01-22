import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BackedTabContent from './BackedTabContent';
import LikesTabContent from './LikesTabContent';

const createList = (list) => {
    return list.map((l, i) => {
        return { id: i, title: l, active: i == 0 ? true : false };
    });
};

const CustomTabs = ({ tabsList, contentList, children }) => {
    const list = tabsList;
    const [tabs, setTabs] = React.useState(createList(list))

    console.log('tabs', tabs)

    const [tabSelected, setTabSelected] = React.useState(tabs[0]);

    const selectItem = (selectedItem) => {
        setTabSelected(selectedItem);
        let updatedList = tabs.map((item) =>
            item.id === selectedItem.id
                ? { ...selectedItem, active: true }
                : { ...item, active: false }
        );
        setTabs(updatedList);
    };

    console.log(contentList[0])

    return (<View style={styles.customTabsContainer}>
        <View style={styles.tabContainer}>
            {tabs.map(item => <Text key={item?.id} onPress={() => selectItem(item)} style={item?.active ? [styles.tabStyles, styles.tabStylesActive] : styles.tabStyles}>{item?.title}</Text>)}
        </View>
        <ScrollView horizontal={false} contentContainerStyle={styles.tabContent} >
            {contentList && contentList[tabSelected?.id]}
        </ScrollView>
    </View>);
}

const styles = StyleSheet.create({
    customTabsContainer: {
        flex: 1,
    },
    tabContainer: {
        flexDirection: "row",
        marginTop: 20,
        marginVertical: 20
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
        // alignItems: "center",
        paddingBottom: 20,
        paddingHorizontal: 20,
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