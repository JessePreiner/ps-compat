import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator, createStackNavigator, createDrawerNavigator } from 'react-navigation';

import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import eventReducer from './eventReducer';
import announcementReducer from './announcementReducer';
import EventList from './EventList';
import AnnouncementList from './AnnouncementList';

// https://playsask.com/wp-json/wp/v2/posts
const rootClient = axios.create({
  responseType: 'json'
});


const rootStore = createStore(announcementReducer, applyMiddleware(axiosMiddleware(rootClient)));
const store = createStore(eventReducer, applyMiddleware(axiosMiddleware(rootClient)));

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
      <Provider store={rootStore}>
        <View style={styles.container}>
        <Text syle={styles.header}>Announcements</Text>

          <AnnouncementList />
        </View>
      </Provider>
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
