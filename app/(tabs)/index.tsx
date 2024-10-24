import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreateEvent from '@/components/CreateEvent';

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Your incoming events.</Text>
      <View style={styles.events} />
      <Text>There is no incoming events, create one...</Text>
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
