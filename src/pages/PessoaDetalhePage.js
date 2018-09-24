import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'

import Line from '../components/Line.js';

export default class PessoaDetalhePage extends Component {
	render() {

		const { pessoa } = this.props.navigation.state.params;

		return (
			<ScrollView style={styles.container}>
				<Image
					style={styles.avatar}
					source={{ uri: pessoa.picture.large }}></Image>
				<View style={styles.detailContainer}>
					<Line label="E-mail:" content={pessoa.email} />
					<Line label="Cidade:" content={pessoa.location.city} />
					<Line label="Estado:" content={pessoa.location.state} />
					<Line label="Telefone:" content={pessoa.phone} />
					<Line label="Celular:" content={pessoa.cell} />
					<Line label="Origem:" content={pessoa.nat} />
				</View>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	avatar: {
		aspectRatio: 1,
	},
	detailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 15,
		elevation: 1,
		marginBottom: 35
	}
})
