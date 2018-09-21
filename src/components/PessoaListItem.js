import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
/* Sem o index.js =  import capitalizePrimeiraLetra from '../util/CapitalizePrimeiraLetra.js'; */
import { capitalizePrimeiraLetra } from '../util';

export default class PessoaListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { pessoa, onPressListItem } = this.props;

        const { title, first, last } = pessoa.name;

        const { thumbnail } = pessoa.picture;

        return (
            <TouchableOpacity
                // Vai executar o onPressListItem que veio como parâmetro e retornar o objeto pessoa. Teve que ser passado a função por que somente o PessoaPage tem o this.props.navigation
                onPress={() => {
                    console.log('clicou');
                    onPressListItem({ pessoa: pessoa });
                }}>
                <View style={styles.line}>
                    <Image style={styles.avatar} source={{ uri: thumbnail }}></Image>
                    <Text style={styles.lineText}>
                        {/* Template string (es6) */}
                        {`${
                            capitalizePrimeiraLetra(title)
                            } ${
                            capitalizePrimeiraLetra(first)
                            } ${
                            capitalizePrimeiraLetra(last)}`
                        }
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    //* relembrando flex: Irá dividir o item pai em '8 partes' individuais) */ 
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 7
    },
    avatar: {
        aspectRatio: 1,
        marginLeft: 15,
        borderRadius: 50,
        flex: 1
    }

})

