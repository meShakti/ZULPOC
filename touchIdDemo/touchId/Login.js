import React from "react";
 import TouchID from 'react-native-touch-id';
 import {Alert,Button,View,Text} from "react-native";

export default class LoginComponent extends React.Component {
  _pressHandler() {
    TouchID.authenticate('Login With your touch id',undefined)
      .then(success => {
        Alert.alert('Authenticated Successfully');
      })
      .catch(error => {
        Alert.alert('Authentication Failed');
      });
  }

  render() {
    return (
      <View style={{flex:1,flexDirection:'column'}}>
      <View style={{flex:1}}></View>
      <View style={{alignItems:'center'}}>
      <Button onPress={this._pressHandler} title="Authenticate with Touch ID" color="#007bff">
        </Button>
        </View>
         <View style={{flex:1}}></View>
      </View>
    );
  }
};