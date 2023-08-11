import { StyleSheet, Text, View } from 'react-native';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import { FontAwesome } from '@expo/vector-icons';

const bgImageSource = require('../../assets/background-image.png');

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={bgImageSource} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Choose a button" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#25292e',
  },
  imageContainer: {
    flex: 3,
    paddingTop: 40,
  },
  buttonContainer: {
    flex: 1,
  },
});
