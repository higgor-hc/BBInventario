inserirManualmente() {
  this.setState({ visible: true });
}

inserirCodigoBarras() {
  this.setState({ visible: false });
}
acessarGAM() {}

render() {
  return (
    <View style={styles.container}>
      <View style={styles.firstRow}>
        <Button
          onPress={() => this.inserirManualmente()}
          title="Manualmente"
        />

        <Button
          onPress={() => this.inserirCodigoBarras()}
          title="Código de Barras"
        />

        <Button onPress={() => this.inserirManualmente()} title="RFId" />
      </View>

      <View style={styles.secondRow}>
        {this.state.visible && (
          <TextInput
            keyboardType="numeric"
            style={{ width: 300 }}
            maxLength={16}
          />
        )}
      </View>
    </View>
  );
}