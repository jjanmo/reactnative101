import { FontAwesome } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface Props {
  label: string;
  theme?: 'primary';
  onPress: () => void;
}

export default function Button({ label, theme, onPress }: Props) {
  const handlePress = () => {
    alert('pressing');
  };

  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.container,
          { borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18 },
        ]}
      >
        <Pressable
          style={[styles.button, { backgroundColor: '#fff' }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.icon}
          />
          <Text style={[styles.label, { color: '#25292e' }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={handlePress}>
        <Text style={styles.label}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 360,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  icon: {
    paddingRight: 8,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
});
