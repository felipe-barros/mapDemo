import React from 'react';
import {View} from 'react-native';
import styles from './MapScreen.styles';
import WebView from 'react-native-webview';

function MapScreen() {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://www.youtube.com/watch?v=vXSOzvak2Bc'}} />
    </View>
  );
}

export default MapScreen;
