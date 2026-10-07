import {
  View,
  Text,
  StyleSheet
} from 'react-native';

export default function MenuScreen() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Coffee Menu
      </Text>

      {/* Cappuccino */}
      <View style={styles.card}>
        <Text style={styles.coffeeName}>Cappuccino</Text>
        <Text style={styles.description}>
          Espresso with steamed milk and milk foam.
        </Text>
        <Text style={styles.price}>$4.50</Text>
      </View>

      {/* Latte */}
      <View style={styles.card}>
        <Text style={styles.coffeeName}>Latte</Text>
        <Text style={styles.description}>
          Espresso with smooth steamed milk.
        </Text>
        <Text style={styles.price}>$4.00</Text>
      </View>

      {/* Espresso */}
      <View style={styles.card}>
        <Text style={styles.coffeeName}>Espresso</Text>
        <Text style={styles.description}>
          Strong and rich espresso coffee.
        </Text>
        <Text style={styles.price}>$3.00</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: '#F7F3F0',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#4B2E2B',
    marginBottom: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 18,
    borderRadius: 10,
    marginBottom: 15,
  },
  coffeeName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B2E2B',
  },
  description: {
    fontSize: 16,
    color: '#555',
    marginTop: 6,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6F4E37',
    marginTop: 10,
  },
});
