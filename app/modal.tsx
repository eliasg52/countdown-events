import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countdown title:</Text>
      <TextInput style={styles.inputTitle} />

      <View
        style={{
          flexDirection: 'row',
          gap: 10,
          width: '80%',
          justifyContent: 'space-evenly',
          marginTop: 10,
          alignItems: 'center',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.textDate}>Day</Text>
          <TextInput
            style={styles.inputDate}
            maxLength={2}
            keyboardType="numeric"
            contextMenuHidden={true}
            textContentType="none"
          />
        </View>
        <Text>/</Text>
        <View style={{ flex: 1 }}>
          <Text style={styles.textDate}>Month</Text>
          <TextInput
            style={styles.inputDate}
            maxLength={2}
            keyboardType="numeric"
            contextMenuHidden={true}
            textContentType="none"
          />
        </View>
        <Text>/</Text>
        <View style={{ flex: 1, marginBottom: 10 }}>
          <Text style={styles.textDate}>Year</Text>
          <TextInput
            style={styles.inputDate}
            maxLength={4}
            keyboardType="numeric"
            contextMenuHidden={true}
            textContentType="none"
          />
        </View>
      </View>

      <View style={{ marginTop: 10, alignSelf: 'flex-start', width: '100%' }}>
        <Text style={[styles.textDate, { marginBottom: 5 }]}>
          Location of event
        </Text>
        <TextInput style={[styles.inputDate, { textAlign: 'left' }]} />
      </View>
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputTitle: {
    width: '100%',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    fontWeight: 'semibold',
  },
  inputDate: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'grey',
    fontSize: 20,
    textAlign: 'center',
  },
  textDate: {
    fontSize: 18,
  },
});
