import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

type Props = {};
export default class App extends Component<props> {

  constructor(props){
    super(props)
    this.state = {altura:0, massa:0, resultado:0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

    calcular(){
      let imc = this.state.massa/(this.state.altura * this.state.altura)

      let s = this.state
      s.resultado = imc
      this.setState(s)

      // < 16 Magreza Grave
      // 16 a < 17 Magreza Moderada
      // 17 a < 18.5 Magreza Leve
      // 18.5 a < 25 Saudável
      // 25 a < 30 Sobrepeso
      // 30 a < 35 Obesidade Grau I
      // 35 a < 40 Obesidade Grau II (Severa)
      // > 40 Obesidade Grau III (Mórbida)

      if (s.resultado <16){
        s.resultadoText = "Magreza Grave"
      }
      else if (s.resultado <17){
        s.resultadoText = "Magreza Moderada"
      }
      else if (s.resultado <18.5){
        s.resultadoText = "Magreza Leve"
      }
      else if (s.resultado <25){
        s.resultadoText = "Saudável"
      }
      else if (s.resultado <30){
        s.resultadoText = "Sobrepeso"
      }
      else if (s.resultado <35){
        s.resultadoText = "Obesidade Grau I"
      }
      else if (s.resultado <40){
        s.resultadoText = "Obesidade Grau II (Severa)"
      }
      else{
        s.resultadoText = "Obesidade Grau I (Mórbida)"
      }

    }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>IMC</Text>
        <View style={styles.entradas}> 
          <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}></TextInput>
          <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}></TextInput>
        </View>
        <TouchableOpacity  style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
        <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
        <Text style={[styles.resultado]}>{this.state.resultadoText}</Text>

        <StatusBar style="auto" />
      </View>
    );
  }
}


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f5fcff',
    },

    titulo:{
      textAlign:"center",
      fontSize:40,
      marginTop:30,
      backgroundColor:"grey", 
      color:"#fff", 
      fontWeight:"bold",
    },

    entradas:{
      flexDirection:"row",
    },
    
    input: {
      height: 80,
      textAlign: "center",
      width: "50%",
      fontSize:40,
      marginTop:30,
    },

    button: {
      backgroundColor:"#89ffa5",
    },

    buttonText:{
      alignSelf:"center",
      textAlign:"center",
      padding: 30,
      fontSize:20,
      color: "#6dc4a4",
      fontWeight:"bold",
    },

    resultado:{
      alignSelf:"center",
      color:"lightgrey",
      fontSize:40,
      padding: 15,
    },

  });
