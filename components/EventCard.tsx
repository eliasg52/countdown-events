import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const EventCard = () => {
  return (
    <View>
      <Image
        source={require('./wedding3.webp')}
        style={{ width: '100%', height: 200 }}
        contentFit="contain"
        contentPosition={'center'}
        transition={1000}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>PARTY EVENT</Text>
        <View style={styles.timer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.timerValue}>145</Text>
            <Text style={styles.timerDesc}>DAYS</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.timerValue}>145</Text>
            <Text style={styles.timerDesc}>HOURS</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.timerValue}>145</Text>
            <Text style={styles.timerDesc}>MINUTES</Text>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.timerValue}>145</Text>
            <Text style={styles.timerDesc}>SECONDS</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default EventCard;

const styles = StyleSheet.create({
  infoContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    backgroundColor: 'rgba(52, 52, 52, 0.6 )',
    fontWeight: '900',
  },
  timer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
    backgroundColor: 'rgba(52, 52, 52, 0.5 )',
    paddingHorizontal: 15,
    paddingTop: 5,
    paddingBottom: 2,
  },
  timerValue: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  timerDesc: {
    color: 'white',
    fontSize: 12,
  },
});
