// Import Tab Navigation.
import { Tabs } from 'expo-router';

// Import icons for the bottom navigation bar.
import Ionicons from '@expo/vector-icons/Ionicons';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        // Color used for the selected tab.
        tabBarActiveTintColor: '#6F4E37',

        // Color used for unselected tabs.
        tabBarInactiveTintColor: '#888',
      }}
    >

      {/* HOME TAB */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitle: 'Coffee House',

          // Change icon depending on whether
          // this tab is selected.
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* MENU TAB */}
      <Tabs.Screen
        name="menu"
        options={{
          title: 'Menu',
          headerTitle: 'Coffee Menu',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'cafe' : 'cafe-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* FAVORITES TAB */}
      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          headerTitle: 'My Favorites',
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'heart' : 'heart-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />

      {/* Details still exists as a route,
          but is NOT shown in the tab bar. */}
      <Tabs.Screen
        name="details"
        options={{ href: null }}
      />

    </Tabs>
  );
}
