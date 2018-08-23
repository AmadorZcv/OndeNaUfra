import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import { Button } from "react-native-elements";
import { onLogout } from "../config/database";
import { log_out } from "../redux/actions";

class Me extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  onLogOutClick() {
    onLogout(
      () => this.props.dispatch(log_out()),
      error => console.log("Eror foi ", error)
    );
  }
  render() {
    return (
      <View>
        <Text> {this.props.user.email}</Text>
        <Button onPress={() => this.onLogOutClick()} />
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
export default connect(mapStateToProps)(Me);
