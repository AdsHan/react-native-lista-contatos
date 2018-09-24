import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import PessoaListItem from './PessoaListItem';

export default class PessoaList extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { pessoas, onPressList } = this.props;
        {/* 
            Modo sem FlatList
            
            const textElements = pessoas.map((pessoa, index) => {
            return (
                <PessoaListItem key={index} pessoa={pessoa} onPressListItem={onPressList}/>
            )

            return (
                <View style={styles.container}>
                    {textElements}
                </View>
            )

        */}

        return (
            // É possível utilizar o ScrollView mas por questões de performance não vamos utilizar (carrega todas as ocorrências em memória)
            <FlatList
                style={styles.container}
                data={pessoas}
                renderItem={({ item }) => (
                    <PessoaListItem
                        pessoa={item}
                        onPressListItem={onPressList} />
                )}
                keyExtractor={item => item.login.uuid} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e2f9ff'
    }
})
