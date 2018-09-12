import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => (
  <View>
    <Text>meu header</Text>
  </View>
);

// Sem o comando abaixo o Header pode ser utulizado somente nesse componente. Com o export ele pode ser importado.
export default Header;

const styles = StyleSheet.create({
  
});
