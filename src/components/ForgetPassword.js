import {Component} from "react";
import {Container, Content, Form, Input, Item, Button, Text} from "native-base";
import {Image, View, ImageBackground, ScrollView} from "react-native";
import React from "react";
import propTypes from "prop-types";

class ForgetPassword extends Component {
    static propTypes = {
        onResetPassword: propTypes.func.isRequired,
    };

    state = {
        success: false
    };

    render() {
        const {
            containerStyle,
            btnResetPassword,
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
                                <Text style={txtTitle}>Forget Password</Text>
                            </View>
                            <Content style={containerStyle} transparent>
                                <Form style={FormStyle}>
                                    <Item rounded last success={this.success} error={!this.success}>
                                        <Input placeholder='Email' onChangeText={value => this.validate(value.trim())}/>
                                    </Item>
                                </Form>
                                <Button full style={btnResetPassword}>
                                    <Text>Reset Password</Text>
                                </Button>
                            </Content>
                        </ScrollView>
                    </ImageBackground>
                </View>
            </Container>
        );
    }

    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({success: true})
        }
        else {
            this.setState({success: false})
            console.log("Email is Correct");
        }
    }
}

const styles = {
    txtTitle: {
        fontSize: 30,
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
    btnResetPassword: {
        marginTop: 250,
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
export {ForgetPassword};

