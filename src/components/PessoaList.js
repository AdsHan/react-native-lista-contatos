import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import PessoaListItem from './PessoaListItem';

export default class PessoaList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { pessoas, onPressList } = this.props;

        const textElements = pessoas.map((pessoa, index) => {
            return (
                <PessoaListItem key={index} pessoa={pessoa} onPressListItem={onPressList}/>
            )
        })

        return (
            <View style={styles.container}>
                {textElements}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})
