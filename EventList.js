
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listEvents } from './eventReducer';

class EventList extends Component {
  componentDidMount() {
    this.props.listEvents();
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={{fontSize: 14}}>{item.title.rendered}</Text>
      <Text style={{fontSize: 10}}>Date: {item.date}</Text>
    </View>
  );
  render() {
    const { events } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={events}
        renderItem={this.renderItem}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  }
});

const mapStateToProps = state => {
  console.log(state);
  
  let storedEvents = state.events.map(event => ({ key: '' + event.id, ...event }));
  return {
    events: storedEvents
  };
};

const mapDispatchToProps = {
  listEvents
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
