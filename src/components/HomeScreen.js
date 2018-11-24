import {Component} from "react";
import {Container, Content, Form, Input, Item, Button, Text, Icon, Toast} from "native-base";
import {Image, ImageBackground, ScrollView, View} from "react-native";
import React from "react";
import propTypes from "prop-types";

class HomeScreen extends Component {

    static propTypes = {
        username: propTypes.string.isRequired
    };


    render() {
        const {
            containerStyle,
            imageContainerStyle,
            imageStyle,
            btnLogin,
            FormStyle,
            txtBorder
        } = styles;

        return (<Text>{this.props.username}</Text>);
    }
}

const styles = {
    imageContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
    },
    containerStyle: {
        backgroundColor: '#ffffff'
    },
    header: {
        fontSize: 40
    },
    btnLogin: {
        marginTop: 30,
    },
    FormStyle: {
        marginTop: 50,
    },

    imageStyle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#d6d7da',
    },
    txtBorder: {
        borderColor: '#000',
        borderWidth: 1
    }
};
export {HomeScreen};