import { StyleSheet, View } from 'react-native';
import ImageViewer from '../components/ImageViewer';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';

const bgImageSource = require('../../assets/background-image.png');

export default function Home() {
  const pickImage = async () => {
    const getImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
      });
      return result;
    };

    const result = await getImage();

    console.log(result);
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imageSource={bgImageSource} />
      </View>
      <View style={styles.buttonContainer}>
        <Button label="Choose a photo" theme="primary" onPress={pickImage} />
        <Button label="Use this photo" onPress={() => alert('pressing')} />
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
