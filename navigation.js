import React from "react";
import PrimeiraTela from "./app/screens/PrimeiraTela";
import LoginGam from "./app/screens/LoginGAM";
import LerMaterial from "./app/screens/LerMaterial";
import { StackNavigator } from "react-navigation";

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.Navigator = StackNavigator({
      //HomeGAM: { screen: LoginGam },
      HomeInventario: { screen: PrimeiraTela },
      lerMaterial: { screen: LerMaterial }
    });
  }

  render() {
    return <this.Navigator />;
  }
}
