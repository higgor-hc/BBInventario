import React, { Component } from "react";
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Button,
  View
} from "react-native";

export default class LoginGAM extends Component {
  constructor(props) {
    super(props);
    this.state = { senha: "Senha SISBB" };
  }

  acessarGAM() {}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start"
          }}
        >
          <Image
            source={require("./../img/bbvector.png")}
            resizeMode="center"
          />
        </View>

        <View
          style={{ flex: 6, alignItems: "center", justifyContent: "center" }}
        >
          <Image source={require("./../img/usuario.png")} resizeMode="center" />

          <Text style={styles.welcome}>Davi Sena</Text>
        </View>

        <View style={{ flex: 3, alignItems: "center" }}>
          <TextInput
            style={{ width: 200 }}
            keyboardType="numeric"
            maxLength={8}
            secureTextEntry={true}
          />
        </View>

        <View style={{ flex: 2, justifyContent: "flex-end" }}>
          <Button
            style={styles.fullWidthButton}
            onPress={() => navigate("HomeInventario")}
            title="ENTRAR"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "white"
  },
  welcome: {
    fontSize: 30,
    fontWeight: "bold",
    margin: 10
  },
  fullWidthButton: {
    backgroundColor: "#055ca4",
    height: 70,
    alignSelf: "stretch"
  }
});
