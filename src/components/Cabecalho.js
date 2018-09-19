import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Cabecalho = (props) => (
	<View style={styles.container}>
		<Text style={styles.title}>{props.title}</Text>
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

export default Cabecalho;