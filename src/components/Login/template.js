import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';

import { NavigationActions } from 'react-navigation';

const GSLogo = require('../../assets/GS.png'); //static required

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.initialState = this.state;
  }

  navigate = () => {
    const navigateToMainScreen = NavigationActions.navigate({
      routeName: 'MainScreen'
    });
    this.props.navigation.dispatch(navigateToMainScreen);
  };

  handleSubmit() {
    const { sendUserData } = this.props;
    try {
      sendUserData(this.state);
    } finally {
      //this.resetForm();
      this.navigate();
    }
  }

  resetForm() {
    this.setState(this.initialState, () => {
      console.log(this.state, 'Resetting state');
    });
  }
  handleName(text) {
    this.setState({ userName: text });
  }

  handlePassword(text) {
    this.setState({ password: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={GSLogo} style={styles.GSLogo} />
        <TextInput
          style={styles.inputField}
          placeholder="Name"
          onChangeText={text => this.handleName(text)}
          value={this.state.userName}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          onChangeText={text => this.handlePassword(text)}
          secureTextEntry={true}
          value={this.state.password}
        />
        <Button title="Login!" color="green" onPress={this.handleSubmit} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'nowrap',
    backgroundColor: 'white'
  },
  inputField: {
    borderRadius: 4,
    borderWidth: 1,
    width: 200,
    borderColor: 'aqua',
    color: 'black',
    height: 60
  },
  GSLogo: {
    width: 200,
    height: 200,
    alignSelf: 'center'
  }
});
