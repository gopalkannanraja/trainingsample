import React from 'react';
import { StyleSheet, Text, View, WebView } from 'react-native';
import Home from './src/containers/Home';

// this changes from feature branch
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Home />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
