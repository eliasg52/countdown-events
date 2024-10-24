import { Link, router } from 'expo-router';
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';

const CreateEvent = () => {
  const withDimension = Dimensions.get('screen').width;
  const halfWidth = withDimension / 2;
  const buttonOffset = halfWidth - 25; // 25 es la mitad del ancho del botón (50/2)

  return (
    <Pressable
      onPress={() => router.push('/modal')}
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? '#F57C00' : '#FFA726',
        },
        styles.buttonContainer,
        { right: buttonOffset },
      ]}
    >
      <Text style={styles.plusButton}>+</Text>
    </Pressable>
  );
};
export default CreateEvent;

const styles = StyleSheet.create({
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    borderRadius: 100,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
