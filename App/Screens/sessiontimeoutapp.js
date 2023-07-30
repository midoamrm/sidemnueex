import React, { PureComponent } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  View,
  PanResponder,
  Alert
  
} from 'react-native';
import PropTypes from 'prop-types';
import UserInactivity  from "./sessiontimeout"

export default class Sessiontimeout extends PureComponent {
    createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);

    state = {
      active: true,
      text: ''
    };
  
    onAction = (active) => {
      this.setState({
        active,
      });
    }
  
    render() {
      const { active } = this.state;
      return (
        <UserInactivity
          timeForInactivity={2000}
          checkInterval={1000}
          onAction={this.onAction}
        >
          <Text style={styles.paragraph}>
            Put your app here: 
            {
              active ? 'Active' : 'Inactive'
            }
          </Text>
          {
              active ? <View></View> : Alert.alert('Session timeout', 'processed to outs', [
                {
                  text: 'Cancel',
                  onPress: () => console.log('Cancel Pressed'),
                  style: 'cancel',
                },
                {text: 'OK', onPress: () => console.log('OK Pressed')},
              ])
            }
          <Text>{this.props.onInactivity}</Text>
  
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
            rejectResponderTermination={true}
          />
          <Button
            title="Here is a button for some reason"
            onPress={() => alert('hi')}
          />
        </UserInactivity>
      );
    }
  }
  const styles = StyleSheet.create({
    paragraph: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      color: '#34495e',
    },
  });