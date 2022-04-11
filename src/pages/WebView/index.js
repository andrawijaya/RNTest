import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

export default class Midtrans extends Component {
  render() {
    return (
      <WebView
        source={{uri: 'https://suitmedia.com/'}}
        style={{marginTop: 20}}
      />
    );
  }
}

const styles = StyleSheet.create({});
