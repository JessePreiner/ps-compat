
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { listStandings } from './standingsReducer';

class StandingsTable extends Component {
  componentDidMount() {
    this.props.listStandings();
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title.rendered}</Text>
    </View>
  );
  render() {
    const { s } = this.props;
    return (
      <View
        styles={styles.container}
        data={s}
        renderItem={this.renderItem}
      >
      </View>
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
  
  let storedEvents = state.s.map(table => ({ key: '' + table.id, ...table }));
  return {
    s: storedEvents
  };
};

const mapDispatchToProps = {
  listStandings
};

export default connect(mapStateToProps, mapDispatchToProps)(StandingsTable);
