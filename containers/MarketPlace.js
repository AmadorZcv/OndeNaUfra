import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { listenVendas } from "../config/database";
import { addPontoVenda } from "../redux/actions";
import { FlatList } from "react-native-gesture-handler";
import VendaItem from "../components/VendaItem";
import ActionButton from "react-native-action-button";

class MarketPlace extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getVendas(snapshot) {
    const valor = snapshot.val();
    valor.key = snapshot.key;
    this.props.dispatch(addPontoVenda(valor));
  }
  //Quando o componente montar
  componentDidMount() {
    //Criamos um listener que executa função sempre que adicionamos uma nova posição
    //Devido ao funcionamento do firebase só precisamos chamar isso para carregar os pontos iniciais tambem
    listenVendas(snapshot => this.getVendas(snapshot));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.pontos}
          renderItem={({ item }) => (
            <VendaItem
              nome={item.key}
              descricao={item.descricao}
              local={item.local}
            />
          )}
          ItemSeparatorComponent={() => <Divider />}
        />
        <ActionButton
          buttonColor="rgb(76, 175, 80)"
          onPress={() => this.props.navigation.navigate("AdicionarVendas")}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { pontos, ativado } = state.vendasReducer;
  return {
    pontos,
    ativado
  };
};
export default connect(mapStateToProps)(MarketPlace);
