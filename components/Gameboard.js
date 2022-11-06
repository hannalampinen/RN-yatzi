import React, { useState, useEffect } from 'react';
import { Text, View, Pressable } from 'react-native'; 
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import style from '../style/style/style';

let board = [];
const NBR_OF_DICES = 5;
const NBR_OF_THROWS = 3; 

export default function Gameboard() { 
    const [nbrOfThrowsLeft, setNbrOfThrowsLeft] = useState(NBR_OF_THROWS);
    const [status, setStatus] = useState('');
    const [total, setTotal] = useState(0);
    const [sum, setSum] = useState(0);
    const [selectedDices, setSelectedDices] = useState(new Array(NBR_OF_DICES).fill(false));
    const [selectedPoints, setSelectedPoints] = useState(new Array(6).fill(false));

    const row = [];
    for (let i = 0; i < NBR_OF_DICES; i++) {
      row.push(
        <Pressable 
          key={"row" + i}
          onPress={() => selectDice(i)}>
          <MaterialCommunityIcons
            name={board[i]}
            key={"row" + i}
            size={70}
            color={getDiceColor(i)}/>
        </Pressable>
     );   
}

  const points = []

  for (let i = 1; i < NBR_OF_DICES + 2; i++) {
    points.push(
        <Pressable 
            key={"line" + i}
            onPress={() => selectPoints(i)}>
            <MaterialCommunityIcons
                name={"numeric-" + [i] + "-box-multiple"}
                key={"line" + i}
                size={50}
                color={getPointColor(i)}/> 
            </Pressable>
  );   
  }

function selectPoints(i) {
    let points = [...selectedPoints];
    points[i] = selectedPoints[i] ? false : true;
    setSelectedPoints(points);
    
    let numberOfSelectedDices = 0
    for (let x = 0; x < 4; x++) {
      if(Number(board[x].slice(-1)) === (i) && selectedDices[x] === true) {
        let number = board.reduce((total,x) => (x=="dice-" + i ? total+1 : total), 0)
        numberOfSelectedDices++
        setSum(sum + i * number)
        setTotal(sum);
        setSelectedDices(new Array(NBR_OF_DICES).fill(false));
      } else if (nbrOfThrowsLeft === 0) {
        setNbrOfThrowsLeft(3);
    } 
  } 
}

function getPointColor(i) {
    return selectedPoints[i] ? "#BF0404" : "#F29F05";
}

function getDiceColor(i) {
  if (board.every((val, i, arr) => val === arr[0])) {
    return "#F29F05";
  }
  else {
    return selectedDices[i] ? "#BF0404" : "#F29F05";
  }
}

function selectDice(i) {
  let dices = [...selectedDices];
  dices[i] = selectedDices[i] ? false : true;
  setSelectedDices(dices);
}

function throwDices() {
  for (let i = 0; i < NBR_OF_DICES; i++) {
    if (!selectedDices[i]) {
      let randomNumber = Math.floor(Math.random() * 6 + 1);
      board[i] = 'dice-' + randomNumber;
    }
  }
  setNbrOfThrowsLeft(nbrOfThrowsLeft-1);
}


function checkThrows() {
  if (board.every((val, i , arr) => val === arr[0]) && nbrOfThrowsLeft > 0) {
    setStatus('Start the game by throwing dices!');
  }
  else if (board.every((val, i , arr) => val === arr[0]) && nbrOfThrowsLeft === 0) {
    setStatus('All same numbers!');
    setSelectedDices(new Array(NBR_OF_DICES).fill(false));
  }
  else if (nbrOfThrowsLeft === 0) {
    setStatus('Select your points.');
  }
  else if (nbrOfThrowsLeft === 3) {
    setStatus('Throw the dices again!')
  }
  else { 
    setStatus('Select and throw the dices again!');
  }
}


useEffect (() => {
  checkThrows();
  if (nbrOfThrowsLeft < 0) {
    setNbrOfThrowsLeft(NBR_OF_THROWS-1);
  }
}, [nbrOfThrowsLeft]);

return(
  <View style={style.container}>
    <View style={style.gameboard}>
      <View style={style.flex}>{row}</View>
      <Text style={style.gamestatus}>{status}</Text> 
      <Pressable style={style.button}
        onPress={() => throwDices()}>
          <Text style={style.buttonText}>
            Throw dices
          </Text>
      </Pressable>
      <Text style={style.gameinfo}> Throws left: {nbrOfThrowsLeft}</Text> 
      <View style={style.flex}>{points}</View>
      <Text style={style.points_sum}>
        Total points: {sum}
      </Text>
      <Text style={style.points_bonus}>
        You are {(63 - sum)} points away from bonus!
      </Text>
    </View>
  </View>
  );
}

