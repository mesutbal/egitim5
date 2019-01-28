/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Image, View, Dimensions, Linking } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';


type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoStyle} source={require('./src/assets/images/5A.png')} />
        <View style={styles.blueView} />
        <View style={styles.social}>
          <Entypo.Button 
            name="facebook"
            size={40}
            backgroundColor="transparent"
            color="blue"
            onPress={() => { Linking.openURL('http://www.facebook.com'); }}
          />
          <Entypo.Button 
            name="twitter"
            size={40}
            backgroundColor="transparent"
            color="lightblue"
            onPress={() => { Linking.openURL('http://www.twitter.com'); }}
          />
          <Entypo.Button 
            name="instagram"
            size={40}
            backgroundColor="transparent"
            color="red"
            onPress={() => { Linking.openURL('http://www.instagram.com'); }}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    position: 'relative'
  },
  social: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: 100,
    height: 50,
    flexDirection: 'row'
  },  
  logoStyle: {
    position: 'absolute',
    width: (Dimensions.get('window').width / 100) * 50,
    height: '35%',
    top: 20,
    left: 20,
    resizeMode: 'contain'
  },
  blueView: {
    position: 'absolute',
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    right: 20,
    bottom: 20
  }
});
