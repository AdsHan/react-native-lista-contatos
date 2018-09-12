import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{ props.title }</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#6ca2f7',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 50,
    color: '#fff'
  }
});

// Sem o comando abaixo o Header pode ser utulizado somente nesse componente. Com o export ele pode ser importado.
export default Header;