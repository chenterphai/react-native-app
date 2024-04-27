import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const photoHolder = require('./assets/background-image.png')
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: '#fff' }}>Open up App.js to start working</Text>
      <View style={styles.imageContainer}>
        <Image
          source={photoHolder}
          style={styles.image}
        />
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
  imageContainer: {
    flex: 1,
    paddingTop: 58
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }

});
