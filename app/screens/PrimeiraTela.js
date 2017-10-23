import React from "react";
import {
  StyleSheet,
  View,
  AppRegistry,
  TextInput,
  Image,
  Picker,
  Alert
} from "react-native";
import { Button, Icon, Text, Right } from "native-base";

export default class PrimeiraTela extends React.Component {
  static navigationOptions = {
    title: "Inventar.io"
  };

  constructor(props) {
    super(props);
    this.state = { prefixo: "3129" };
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userPhoto}>
            <Image
              style={{
                alignSelf: "center",
                height: 65,
                width: 65,
                borderWidth: 3,
                borderRadius: 75
              }}
              source={require("./../img/usuario.png")}
              resizeMode="stretch"
            />
          </View>
          <View style={styles.userProfile}>
            <View style={styles.userID}>
              <Text style={{ fontSize: 20, fontWeight: "bold", margin: 10 }}>
                Davi Sena (F2315942)
              </Text>
            </View>
            <View style={styles.dependencia}>
              <Text style={{ fontSize: 20, margin: 10 }}>Prefixo:</Text>
              <TextInput
                style={{ width: 60, height: 41, fontSize: 20, color: "black" }}
                keyboardType="numeric"
                maxLength={4}
                value={this.state.prefixo}
              />
              <Button transparent style={{ alignSelf: "center" }}>
                <Icon name="search" />
              </Button>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              right: 0
            }}
          >
            <Image
              source={require("./../img/bbcinza.jpg")}
              resizeMode="stretch"
            />
          </View>

          <Button
            style={{ alignItems: "center", alignSelf: "center" }}
            large
            primary
            onPress={() => navigate("lerMaterial")}
          >
            <Text>Iniciar Inventário</Text>
          </Button>
          <Button
            style={{ alignItems: "center", alignSelf: "center" }}
            large
            primary
            onPress={() => navigate("lerMaterial")}
          >
            <Text>Aceite de Bens</Text>
          </Button>
        </View>
        <View style={styles.menu}>
          <Button vertical transparent style={{ alignSelf: "center" }}>
            <Icon style={{ color: "gray" }} name="list" />
            <Text style={{ color: "gray", fontSize: 16 }}>Listar</Text>
          </Button>
          <Button vertical transparent style={{ alignSelf: "center" }}>
            <Icon style={{ color: "gray" }} name="send" />
            <Text style={{ color: "gray", fontSize: 16 }}>Enviar</Text>
          </Button>
          <Button vertical transparent style={{ alignSelf: "center" }}>
            <Icon style={{ color: "gray" }} name="arrow-back" />
            <Text style={{ color: "gray", fontSize: 16 }}>Sair</Text>
          </Button>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "transparent"
  },
  header: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    borderBottomWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3
  },
  body: {
    flex: 8,
    flexDirection: "column",
    backgroundColor: "#f7f7f7",
    justifyContent: "space-around"
  },
  userPhoto: {
    flex: 2.5,
    flexDirection: "row",
    backgroundColor: "transparent"
  },
  userProfile: {
    flex: 8,
    flexDirection: "column",
    backgroundColor: "transparent",
    justifyContent: "space-around"
  },
  dependencia: {
    flex: 8,
    flexDirection: "row",
    backgroundColor: "transparent",
    alignItems: "center"
  },
  menu: {
    flex: 1.5,
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopWidth: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3
  }
});
