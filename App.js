import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, Pressable, StyleSheet, Switch, Text, TextInput, View } from 'react-native';

export default function App() {
  const [input, setInput] = useState("")
  const [score, setScore] = useState(0)
  const [life, setLife] = useState(0)
  const [bestScore, setBestScore] = useState(0)



  const generateRandomNumber = () => {

    let number = Math.floor((Math.random() * 5) + 1);
    return number
  }

  const compareResult = (nb) => {
    if (parseInt(input) === nb) {
      setScore(c => c + 1)

    }
    else {
      if (life < 2) {
        setLife(c => c + 1)


      }
      else {

        setLife(0)
        setScore(0)
        if (bestScore < score) {
          setBestScore(score)
        }
        console.log('score', score)
      }
    }
  }

  const play = () => {
    let nb = generateRandomNumber()
    compareResult(nb)
  }


  const getColor = (id) => {
    switch (id) {
      case 1:
        return id > life ? styles.blue : null;
      case 2:
        return id > life ? styles.blue : null;
      case 3:
        return id > life ? styles.blue : null;
      default:
        return null;
    }
  };



  return (
    <View style={styles.container}>
      <View>
        <Text>Guess the number</Text>
        <TextInput value={input} onChangeText={t => setInput(t)}></TextInput>
        <Button title='Guess' onPress={play}></Button>
        <Text>Score : {score}</Text>

      </View>
      <View><Text>View restante : {3 - life}</Text></View>
      <View style={styles.live}>
        <View style={[styles.rectangle, getColor(1)]}></View>
        <View style={[styles.rectangle, getColor(2)]}></View>
        <View style={[styles.rectangle, getColor(3)]}></View>
      </View>

      <View style={styles.score}>
        <Text>Best score : {bestScore}</Text>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
    marginTop: 50
  },
  live: {
    flexDirection: 'row',
    backgroundColor: "yellow"

  },
  rectangle: {
    width: 20,
    height: 50,
    backgroundColor: 'red',
    margin: 10


  },
  score: {
    marginTop: 40,
    backgroundColor: "yellow"
  },
  blue: {
    backgroundColor: "blue"
  }
});
