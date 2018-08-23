import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './eventReducer';
import EventList from './EventList';

const client = axios.create({
  baseURL: 'https://soccer.playsask.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

class Matches extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <EventList />
        </View>
      </Provider>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <Navigation />
    );
  }
}

class Announcements extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
        These are the announcements
        </Text>
      </View>
    );
  }
}

class Standings extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
        These are the standings
        </Text>
      </View>
    );
  }
}


class Schedule extends React.Component {
  static navigationOptions = {
  };
  render () {
    return (
    <View style={styles.container}>
      <Text syle={styles.header}>Matches</Text>
      <Matches></Matches>
      {/* <Text>Huh</Text><Text onPress={() => props.navigation.navigate('Soccer')}>Go to Soccer</Text> */}
    </View>
    )
    }
} 

const Navigation = createBottomTabNavigator({
  Announcements: () => (<Announcements></Announcements>),
  Schedule: () => (<Schedule></Schedule>),
  Standings: () => (<Standings></Standings>)
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  header: {
    fontSize:16,
    fontWeight: 'bold'
  }
});
