import {Component} from "react";
import {Container, Content, Form, Input, Item, Button, Text, Icon, Toast} from "native-base";
import {Image, ImageBackground, ScrollView, View} from "react-native";
import React from "react";
import propTypes from "prop-types";

class SignIn extends Component {

    static propTypes = {
        OnSignIn: propTypes.func.isRequired,
        OnSignUp: propTypes.func.isRequired,
        OnForgetPassword: propTypes.func.isRequired,

    };

    state = {
        username: '',
        password: '',
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

        return (
            <Container style={containerStyle}>
                <View style={{flex: 1}}>
                    <ImageBackground
                        resizeMode={'cover'} // or cover stretch
                        style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                        source={require('../../assets/backImage.jpg')}>
                        <ScrollView>
                            <Content>
                                <View style={imageContainerStyle}>
                                    <Image source={require('../../assets/sharp.png')} style={imageStyle}/>
                                </View>
                                <Form style={FormStyle}>
                                    <Item style={txtBorder} rounded last>
                                        <Icon active name='person'/>
                                        <Input placeholder='Username'
                                               onChangeText={value => this.setState({username: value.trim()})}/>
                                    </Item>
                                    <Item style={txtBorder} rounded last>
                                        <Icon active name='key'/>
                                        <Input placeholder='Password'
                                               onChangeText={value => this.setState({password: value.trim()})}/>
                                    </Item>
                                </Form>
                                <Button full transparent dark onPress={this.props.OnForgetPassword}>
                                    <Text>Forget Password?</Text>
                                </Button>
                                <Button full style={btnLogin} onPress={this.props.OnSignIn}>
                                    <Text>Sign In</Text>
                                </Button>
                                <Button full transparent dark onPress={this.props.OnSignUp}>
                                    <Text>Don't have an account? Sing Up</Text>
                                </Button>
                            </Content>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </Container>
        );
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
export {SignIn};