import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateEvent from '@/components/CreateEvent';
import { useState } from 'react';
import EventCard from '@/components/EventCard';

export default function TabOneScreen() {
  const [events, setEvents] = useState([1]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your incoming events.</Text>
      <View style={styles.events}></View>
      {events.length === 0 ? (
        <Text>There is no incoming events, create one...</Text>
      ) : (
        <EventCard />
      )}
      <CreateEvent />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  events: {
    marginTop: 20,
  },
});
