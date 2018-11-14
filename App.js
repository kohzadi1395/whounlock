/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {SignIn, SignUp, ForgetPassword, HomeScreen} from "./src";

import {Alert, ToastAndroid} from "react-native";


type Props = {};
export default class App extends Component<Props> {
    state = {
        currentUser: '',
        currentPage: ''
    };

    render() {
        if (this.state.currentPage) {
            return this.findPage();
        }
        else {
            return (
                <SignIn OnSignIn={this.OnPressBtnSignIn}
                        OnSignUp={
                            () => {
                                this.setState({currentPage: 'signUp'});
                            }
                        }
                        OnForgetPassword={
                            () => {
                                this.setState({currentPage: 'forgetPassword'});
                            }
                        }/>
            );
        }
    }

    OnPressBtnSignIn() {


        if (this.state.username || this.state.password) {
            ToastAndroid.show('Ok', ToastAndroid.SHORT
            );

        }
        else {
            ToastAndroid.show(
                'Username or Password Is Wrong',
                ToastAndroid.SHORT
            );
            this.setStart({currentUser: 'TestingUser'});
            this.setState({currentPage: 'signUp'});
        }
    };

    findPage() {
        if (this.state.currentPage === 'signUp') {
            return (
                <SignUp onSignUp={this.OnPressBtnSignIn}/>
            );
        }
        else if (this.state.currentPage === 'forgetPassword') {
            return (<ForgetPassword onResetPassword={this.OnPressBtnSignIn}/>);
        }
        else if (this.state.currentPage === 'home') {
            return (<HomeScreen onSignUp={this.OnPressBtnSignIn}/>);
        }
    }
}


