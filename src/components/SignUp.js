import {Component} from "react";
import {Container, Content, Form, Input, Item, Button, Text} from "native-base";
import {Image, View, ImageBackground, ScrollView} from "react-native";
import React from "react";
import propTypes from "prop-types";

class SignUp extends Component {
    static propTypes = {
        onSignUp: propTypes.func.isRequired,
    };
    render() {
        const {
            containerStyle,
            btnLogin,
            FormStyle,
            txtTitle,
        } = styles;
        return (

            <Container>
                <View style={{flex: 1}}>
                    <ImageBackground
                        resizeMode={'cover'} // or cover stretch
                        style={{flex: 1}} // must be passed from the parent, the number may vary depending upon your screen size
                        source={require('../../assets/backImage.jpg')}>
                        <ScrollView>
                            <View>
                                <Text style={txtTitle}>Sign Up</Text>
                            </View>
                            <Content style={containerStyle} transparent>
                                <Form style={FormStyle}>
                                    <Item rounded last>
                                        <Input placeholder='Name'/>
                                    </Item>
                                    <Item rounded last>
                                        <Input placeholder='Email'/>
                                    </Item>
                                    <Item rounded last>
                                        <Input placeholder='Password'/>
                                    </Item>
                                    <Item rounded last>
                                        <Input placeholder='Confirm Password'/>
                                    </Item>
                                </Form>
                                <Button full style={btnLogin}>
                                    <Text>Sign In</Text>
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
    txtTitle: {
        fontSize: 40,
        marginTop: 30,
        marginLeft: 20
    },
    containerStyle: {
        // backgroundColor: '#ffffff',
        marginTop: 50,

    },
    header: {
        fontSize: 40
    },
    btnLogin: {
        marginTop: 80,
    },
    FormStyle: {
        marginTop: 20,
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
    }
};
export {SignUp};

// background-image:linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)) ,url(img/back-customers.jpg);