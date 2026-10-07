import {
  View,
  Text,
  Pressable,
  StyleSheet
} from 'react-native';

import { useState } from 'react';

export default function FavoritesScreen() {

  // false = Cappuccino is not a favorite.
  // true  = Cappuccino is a favorite.
  const [favorite, setFavorite] = useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        My Favorites
      </Text>

      <View style={styles.card}>

        <Text style={styles.coffeeName}>
          Cappuccino
        </Text>

        <Pressable
          style={styles.button}

          // Toggle true <-> false.
          onPress={() => setFavorite(!favorite)}
        >
          <Text style={styles.buttonText}>
            {favorite
              ? 'Remove from Favorites'
              : 'Add to Favorites'}
          </Text>
        </Pressable>

      </View>

      <Text style={styles.status}>
        {favorite
          ? 'Cappuccino is one of your favorites.'
          : 'No favorite coffee selected.'}
      </Text>

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
    padding: 20,
    borderRadius: 10,
  },
  coffeeName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#4B2E2B',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6F4E37',
    padding: 13,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  status: {
    fontSize: 17,
    color: '#555',
    marginTop: 20,
  },
});
