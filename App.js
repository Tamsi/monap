import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView, TouchableHighlight } from 'react-native';
//import ListVue from "./components/ListVue";

export default class IScrolledDownAndWhatHappenedNextShockedMe extends Component {
  _onPressButton()
  {
    console.log("OK");
  }
  render() {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Qu'est ce qu'on mange ?</Text>
          <Text>J'ai la flemme !</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#f44',
  }
});
