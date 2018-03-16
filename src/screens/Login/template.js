import React, { Component } from 'react';
import { View, TextInput, Button, Image, Text } from 'react-native';

import { NavigationActions } from 'react-navigation';

import GSLogo from '../../assets/GS.png';

import { styles } from './styles';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      pass: ''
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
    const { profileLogin } = this.props;
    profileLogin(this.state.userName, this.state.pass);
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
    this.setState({ pass: text });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={GSLogo} style={styles.GSLogo} />
        <TextInput
          style={styles.inputField}
          placeholder="Name"
          onChangeText={text => this.handleName(text)}
          autoCapitalize = 'none'
          value={this.state.userName}
        />
        <TextInput
          style={styles.inputField}
          placeholder="Password"
          autoCapitalize = 'none'
          onChangeText={text => this.handlePassword(text)}
          secureTextEntry={true}
          value={this.state.pass}
        />
        <Button title="Login!" color="green" onPress={this.handleSubmit} />
        { this.props.error &&
          <Text style={{ fontWeight: 'bold', fontSize: 20 }}>{this.props.error.message}</Text>
        }
      </View>
    );
  }
}
