import React from "react";
import {
  StyleSheet,
  View,
  AppRegistry,
  TextInput,
  Image,
  Picker
} from "react-native";
import { Button, Icon, Text } from "native-base";

export default class PrimeiraTela extends React.Component {
  constructor(props) {
    super(props);
    this.state = { prefixo: "9999" };
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
                height: 80,
                width: 80,
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
                style={{ width: 60, fontSize: 20 }}
                keyboardType="numeric"
                maxLength={4}
                value={this.state.prefixo}
              />
            </View>
          </View>
        </View>
        <View style={styles.body} />
        <Button primary onPress={() => navigate("lerMaterial")}>
          <Text>Iniciar Inventário</Text>
        </Button>
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
  header: {
    flex: 1.5,
    flexDirection: "row",
    backgroundColor: "blue"
  },
  body: {
    flex: 8,
    flexDirection: "row",
    backgroundColor: "#ffffff"
  },
  userPhoto: {
    flex: 2.5,
    flexDirection: "row",
    backgroundColor: "white"
  },
  userProfile: {
    flex: 8,
    flexDirection: "column",
    backgroundColor: "#ffffff",
    justifyContent: "space-around"
  },
  dependencia: {
    flex: 8,
    flexDirection: "row",
    backgroundColor: "#ffffff",
    alignItems: "center"
  }
});
