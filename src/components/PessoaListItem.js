import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
/* Sem o index.js =  import capitalizePrimeiraLetra from '../util/CapitalizePrimeiraLetra.js'; */
import {capitalizePrimeiraLetra} from '../util';

export default class PessoaListItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { pessoa } = this.props;

        const { title, first, last } = pessoa.name;

        return (
            <View style={styles.line}>
                <Text style={styles.lineText}>
                    {/* Template string (es6) */}
                    { `${
                        capitalizePrimeiraLetra(title)
                    } ${
                        capitalizePrimeiraLetra(first)
                    } ${
                        capitalizePrimeiraLetra(last)}` }
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'

    },
    lineText: {
        fontSize: 20,
        paddingLeft: 15

    }
})

