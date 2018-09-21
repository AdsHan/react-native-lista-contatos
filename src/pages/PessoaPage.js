import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PessoaList from '../components/PessoaList.js';

import axios from 'axios';

export default class PessoaPage extends React.Component {

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
                <PessoaList 
                    pessoas={this.state.pessoas} 
                    // Nos declaramos o PessoaPage no 'StackNavigator' então ele injeta automaticamente o "this.props.navigation" (somente ele tem acesso a essa props diretamente). Mas o evento está no TouchableOpacity (onPress) do PessoaListItem
                    onPressList={ pageParams => {
                        this.props.navigation.navigate('PessoaDetalhe', pageParams)
                    }} />
			</View>
		);
	}
}
