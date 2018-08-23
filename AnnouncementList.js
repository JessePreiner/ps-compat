
import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { listAnnouncements } from './announcementReducer';

class AnnouncementList extends Component {
  componentDidMount() {
    this.props.listAnnouncements();
  }
  renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={{fontSize: 14}}>{item.title.rendered}</Text>
      <Text style={{fontSize: 10}}>Date: {item.date}</Text>
    </View>
  );
  render() {
    const { announcements } = this.props;
    return (
      <FlatList
        styles={styles.container}
        data={announcements}
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
  let storedAnnouncements = state.announcements.map(announcement => ({ key: '' + announcement.id, ...announcement }));
  return {
    announcements: storedAnnouncements
  };
};

const mapDispatchToProps = {
  listAnnouncements
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncementList);
