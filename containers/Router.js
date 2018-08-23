import React, { PureComponent } from "react";
import { onAuthStateChanged } from "../config/database";
import { AuthStack, MeStack } from "../config/routes";
import { connect } from "react-redux";
import { changeUser } from "../redux/actions";

class Router extends PureComponent {
  componentDidMount() {
    console.log("user é", this.props.user)
    onAuthStateChanged(user => this.props.dispatch(changeUser(user)));
  }
  render() {
    return this.props.user ? <MeStack /> : <AuthStack />;
  }
}
const mapStateToProps = state => {
  const { user } = state.userReducer;
  return {
    user
  };
};
export default connect(mapStateToProps)(Router);
