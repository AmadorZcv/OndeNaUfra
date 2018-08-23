import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import { primaryColor } from '../config/styles';
import { addvenda } from '../config/database';
import { connect } from 'react-redux';


class AdicionarVendas extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            descricao: '',
            longitude: '',
            latitude: '',
        };
    }
    componentDidMount() {
        navigator.geolocation.getCurrentPosition((cord) => { this.state.setState({ longitide: cord.longitude, latitude: cord.latitude }) },
            (error) => { Alert.alert("Erro", "Erro ao carregar sua localicação") }, { timeout: 1000 });

    }
    onclikSubmit() {
        console.log("User é ", this.props.user)
        addvenda(this.props.user.email, this.state.name, this.state.descricao, this.state.longitude, this.state.longitide)

    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.texTitulo}> Nova venda </Text>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Qual produto irá comercializar?"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={(vendaname) => this.setState({ vendaname })}
                        value={this.state.vendaname}
                    />
                    <TextInput
                        style={styles.textInput}
                        placeholder="Drescrição"
                        underlineColorAndroid="rgba(0,0,0,0)"
                        onChangeText={(descricao) => this.setState({ descricao })}
                        value={this.state.descricao}

                    />
                    <Button
                        title="Pegar localizaçao"
                        buttonStyle={{
                            backgroundColor: primaryColor,
                            marginVertical: 10

                        }} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Voltar"
                        buttonStyle={{
                            backgroundColor: primaryColor,
                            width: 100,
                            height: 45,
                        }}
                        onPress={() => { this.props.navigation.goBack() }}
                    />
                    <Button
                        title="Adicionar"
                        buttonStyle={{
                            backgroundColor: primaryColor,
                            width: 100,
                            height: 45,
                        }}
                        onPress={() => this.onclikSubmit()}
                    />
                </View>
            </View>
        );
    }
}
const mapStateToProps = state => {
    const { user } = state.userReducer;

    return {
        user
    };
};
export default connect(mapStateToProps)(AdicionarVendas)
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
        height: 30,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row',
    }

});