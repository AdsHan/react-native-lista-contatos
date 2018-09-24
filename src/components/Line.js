import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class Line extends Component {
    render() {
        // Destruction com default
        const { label = '', content = '-' } = this.props;

        return (
            <View style={styles.line}>
                {/* Passar um array de estilos */}
                <Text style={[
                    styles.cell,
                    styles.label,
                    label.length > 8 ? styles.longLabel : null
                ]}> {label} </Text>
                <Text style={[
                    styles.cell,
                    styles.content]}> {content} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    line: {
        flexDirection: 'row',
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: '#c5c5c5'
    },
    cell: {
        fontSize: 18,
        paddingLeft: 5,
    },
    label: {
        fontWeight: 'bold',
        flex: 1
    },
    content: {
        flex: 3
    },
    longLabel: {
        fontSize: 13
    }
})
