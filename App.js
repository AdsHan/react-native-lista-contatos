import { StackNavigator }  from 'react-navigation';
import PessoaPage from './src/pages/PessoaPage';
import PessoaDetalhePage from './src/pages/PessoaDetalhePage';

import { capitalizePrimeiraLetra } from './src/util';

export default StackNavigator ({
	'Main': {
		screen: PessoaPage
	},
	'PessoaDetalhe': {
		screen:  PessoaDetalhePage,
		// É possível passar uma função que devolve um objeto. A biblioteca sempre nos passa uma parâmetro com o que passamos no 'this.props.navigation.navigate('PessoaDetalhe', pageParams)';
		navigationOptions: ( {navigation} ) => {
			const pessoaNome = capitalizePrimeiraLetra(navigation.state.params.pessoa.name.first);
			return ({
				title: pessoaNome,
				headerTitleStyle: {
					fontSize: 30,
					color: '#fff',
					
					
				}					
			})
		}
	}
}, {
	// Configurações Globais
	navigationOptions: {
		title: 'Pessoas',
		headerTintColor: '#fff',
		headerStyle: {
			backgroundColor: '#6ca2f7',
		
		},
		headerTitleStyle: {
			fontSize: 30,
			color: '#fff',
			flex: 1, 
			textAlign: 'center'			
		}	
	}
});