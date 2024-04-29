import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import ImageViewers from './components/ImageViewers';
import Button from './components/Button';
const photoHolder = require('./assets/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <Text className='text-white font-bold'>NYT Tech</Text>
      {/* <Text style={{ color: '#fff' }}>Open up App.js to start working</Text> */}
      <ImageViewers photoHolder={photoHolder} />

      <View style={styles.footerContainer}>
        <Button label={'Choose a photo'} theme="primary" />
        <Button label={'Use this photo'} />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
