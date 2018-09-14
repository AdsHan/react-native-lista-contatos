import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header.js';  

export default class App extends React.Component {
  renderList() {
    const names = [
      'Anderson Hansen',
      'Anderson Hansen',
      'Anderson Hansen'
    ];

    const textElements = names.map(nome => {
      return <Text> { nome } </Text>

    })
    
    return textElements;
    




  }
  render() {
    return (
      <View>
        <Header title="Contatos"/>
        
        {/* É usado this por que declaramos a função dentro da própria classe */}
        { this.renderList() }        
      </View>
    );
  }
}
