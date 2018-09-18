import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.row}>
            <View style={styles.col}>
                <Text style={styles.number}>1</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.text}>ABC</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.number}>3</Text>
                <Text style={styles.text}>DEF</Text>
            </View>

        </View>

        <View style={styles.row}>
            <View style={styles.col}>
                <Text style={styles.number}>4</Text>
                <Text style={styles.text}>GHI</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.number}>5</Text>
                <Text style={styles.text}>JKL</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.number}>6</Text>
                <Text style={styles.text}>MNO</Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.col}>
                <Text style={styles.number}>7</Text>
                <Text style={styles.text}>PQRS</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.number}>8</Text>
                <Text style={styles.text}>TUV</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.number}>9</Text>
                <Text style={styles.text}>WXYZ</Text>
            </View>
        </View>

        <View style={styles.row}>
            <View style={styles.col}>

            </View>

            <View style={styles.col}>
                <Text style={styles.number}>0</Text>
            </View>

            <View style={styles.col}>
                <Text style={styles.text}>X</Text>
            </View>
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  row: {
    flex:1,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    flexDirection: 'row'
  },
  col: {
    flex:1,
    borderRightWidth:1,
    borderRightColor: 'black',
    justifyContent: 'center',
    alignItems: 'center'
  },
  number: {
    fontSize: 40
  },
  text: {

  }
});

