import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './src/components/Cabecalho.js';
import PessoaList from './src/components/PessoaList.js';

import axios from 'axios';

export default class App extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			pessoas: []
		};

	}

	// Executado logo após o primeiro render
	componentDidMount() {
		axios
			.get('https://randomuser.me/api/?nat=br&results=5')
			.then(response => {
				const { results } = response.data;
				// Sempre que for necessários atualizar um estado usamos o this.setState() (Não pode ser usado 'this.State = ...')
				this.setState({
					pessoas: results
				});
			})
	}

	render() {
		return (
			<View>
				<Cabecalho title="Contatos" />
				<PessoaList pessoas={this.state.pessoas} />
			</View>
		);
	}
}
