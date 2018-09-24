import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import PessoaList from '../components/PessoaList.js';

import axios from 'axios';

export default class PessoaPage extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			pessoas: [],
			loading: false,
			error: false
		};

	}

	// Executado logo após o primeiro render
	componentDidMount() {
		this.setState({ loading: true });
		axios
			.get('https://randomuser.me/api/?nat=br&results=15')
			.then(response => {
				const { results } = response.data;
				// Sempre que for necessário atualizar um estado usamos o this.setState() (Não pode ser usado 'this.State = ...')
				this.setState({
					pessoas: results,
					loading: false
				});
			}).catch(erro => {
				console.log(erro);
				this.setState({ error: true });
			})

	}

	renderPage() {
		if (this.state.loading) {
			return <ActivityIndicator size='large' color='#6ca2f7' />
		} else {
			return <PessoaList
				pessoas={this.state.pessoas}
				// Nós declaramos o PessoaPage no 'StackNavigator' então ele injeta automaticamente o "this.props.navigation" (somente ele tem acesso a essa props diretamente). Mas o evento está no TouchableOpacity (onPress) do PessoaListItem
				onPressList={pageParams => {
					this.props.navigation.navigate('PessoaDetalhe', pageParams)
				}} />;
		}

	}

	render() {
		return (			
			<View style={styles.container}>
				{this.renderPage()}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
})
