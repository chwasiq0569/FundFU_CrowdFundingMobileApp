import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const createList = (list) => {
    return list.map((l, i) => {
        return { id: i, title: l, active: i == 0 ? true : false };
    });
};

const CustomTabs = () => {
    const list = ["Backed", "Likes"];
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

    return (<View>
        <View style={styles.tabContainer}>
            {tabs.map(item => <Text key={item?.id} onPress={() => selectItem(item)} style={item?.active ? [styles.tabStyles, styles.tabStylesActive] : styles.tabStyles}>{item?.title}</Text>)}
        </View>
        <View style={styles.tabContent}>
        </View>
    </View>);
}

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: "row",
        marginTop: 30
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
    }
});

export default CustomTabs;