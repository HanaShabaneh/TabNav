import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Coffee House
      </Text>

      <Text style={styles.subtitle}>
        Fresh coffee, made for you.
      </Text>

      <Text style={styles.message}>
        Explore our menu and your favorite
        coffee using the tabs below.
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
    backgroundColor: '#F7F3F0',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#4B2E2B',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginBottom: 25,
  },
  message: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
});
