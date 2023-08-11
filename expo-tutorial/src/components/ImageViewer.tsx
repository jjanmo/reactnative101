import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

export default function ImageViewer({
  imageSource,
}: {
  imageSource: ImageSourcePropType;
}) {
  return <Image source={imageSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 360,
    height: 440,
    borderRadius: 18,
  },
});
