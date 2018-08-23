import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { primaryColor } from '../config/styles';


export default class AdicionarVendas extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.texTitulo}> Nova venda </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Qual produto irá comercializar?"
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Drescrição"

                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Local"
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Voltar"
                        buttonStyle={{
                            backgroundColor: primaryColor,
                            width: 100,
                            height: 45,
                        }}
                        onPress={() => { this.props.navigation.goBack(null) }}
                    />
                    <Button
                        title="Adicionar"
                        buttonStyle={{
                            backgroundColor: primaryColor,
                            width: 100,
                            height: 45,
                        }}
                        onPress={() => { }}
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        padding: 5,
        flex: 1,
        flexDirection: 'column',


    },
    texTitulo: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold'

    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row',
    }

});