// SettingsScreen.js

import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export class SettingsScreen extends Component {
    render() {
      return (
        <View>
          <Text>This is the Settings screen</Text>
          <Button onPress={() => this.props.navigation.navigate('NavigationScreen')} title="Home"/>
        </View>
      )
    }
  };

export default SettingsScreen;