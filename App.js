import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.wrapper}>
        <view style={styles.row}>
            <view style={styles.col}>
                <Text style={styles.number}>1</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.number}>2</Text>
                <Text style={styles.text}>ABC</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.number}>3</Text>
                <Text style={styles.text}>DEF</Text>
            </view>

        </view>

        <view style={styles.row}>
            <view style={styles.col}>
                <Text style={styles.number}>4</Text>
                <Text style={styles.text}>GHI</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.number}>5</Text>
                <Text style={styles.text}>JKL</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.number}>6</Text>
                <Text style={styles.text}>MNO</Text>
            </view>
        </view>

        <view style={styles.row}>
            <view style={styles.col}>
                <Text style={styles.number}>7</Text>
                <Text style={styles.text}>PQRS</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.number}>8</Text>
                <Text style={styles.text}>TUV</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.number}>9</Text>
                <Text style={styles.text}>WXYZ</Text>
            </view>
        </view>

        <view style={styles.row}>
            <view style={styles.col}>

            </view>

            <view style={styles.col}>
                <Text style={styles.number}>0</Text>
            </view>

            <view style={styles.col}>
                <Text style={styles.text}>X</Text>
            </view>
        </view>
        
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
    flexDirection: row
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
