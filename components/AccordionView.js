import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';

const SECTIONS = [
    {
        title: 'When Will Payment Be Taken?',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
    {
        title: 'Can I pay extra for tracked and signed shipping?',
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
    },
];

export default class AccordionView extends Component {
    state = {
        activeSections: [],
    };


    _renderSectionTitle = (section) => {
        return (
            <View style={styles.content}>
                <Text>{section.content}</Text>
            </View>
        );
    };

    _renderHeader = (section) => {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>{section.title}</Text>
            </View>
        );
    };

    _renderContent = (section) => {
        return (
            <View style={styles.content}>
                <Text style={styles.contentText}>{section.content}</Text>
            </View>
        );
    };

    _updateSections = (activeSections) => {
        this.setState({ activeSections });
    };

    render() {
        console.log(this.state.activeSections)

        return (

            <>
                <Text style={styles.projectTitle}>NFT Marketplace Application</Text>
                <Accordion
                    sections={SECTIONS}
                    activeSections={this.state.activeSections}
                    // renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                /></>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        // backgroundColor: "#150C27",
    },
    projectTitle: {
        fontSize: 16,
        color: "white",
        fontFamily: 'PoppinsSemiBold',
        marginBottom: 20
    },
    header: {
        backgroundColor: "white",
        height: 40,
        justifyContent: 'center',
        backgroundColor: '#150C27',
    },
    headerText: {
        color: 'white',
        fontFamily: 'PoppinsSemiBold',
    },
    content: {
        backgroundColor: "#150C27",
    },
    contentText: {
        color: 'white',
        fontFamily: 'PoppinsRegular',
        fontSize: 12
    }
})