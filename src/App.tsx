import React, {useEffect, useState} from 'react';

import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageSourcePropType,
  TouchableOpacity,
} from 'react-native';



import Dice1 from './assets/dice1.png';
import Dice2 from './assets/dice2.png';
import Dice3 from './assets/dice3.png';
import Dice4 from './assets/dice4.png';
import Dice5 from './assets/dice5.png';
import Dice6 from './assets/dice6.png';

import {PropsWithChildren} from 'react';

type DiceProp = PropsWithChildren<{
  imageUrl: ImageSourcePropType,
}>;


const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};




const Dice = ({imageUrl}: DiceProp): React.JSX.Element => {
  return (
    <View style={styles.imageContainer}>
      <Image source={imageUrl} style={styles.image} />
    </View>
  );
};

function RollDice(): React.JSX.Element {
  const images = [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6];
  const [diceImage, setDiceImage] = useState(() => images[0]);

  const roll = () => {
    const randIndex = Math.round(Math.random() * 5);
    setDiceImage(() => images[randIndex]);
  };

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}  />
      <TouchableOpacity onPress={roll} style={styles.button}>
        <Text style={styles.buttonText}>Roll</Text>
      </TouchableOpacity>
    </View>
  );



}


export default RollDice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    margin: 20,
  },
  button: {
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderColor: '#E71C23',
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonText: {
    color: '#E71C23',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },  
});

