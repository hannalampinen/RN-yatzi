import React from 'react';
import { View } from 'react-native';
import Footer from './components/Footer';
import Gameboard from './components/Gameboard';
import Header from './components/Header';
import style from './style/style/style';

export default function App() {
  return (
    <View style={style.container}>
      <Header />
      <Gameboard />
      <Footer />
    </View>
  );
}

