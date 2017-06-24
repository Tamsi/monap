import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, Picker, ScrollView, TouchableHighlight } from 'react-native';

class ListVue extends Component {
  constructor(props)
  {
    super(props);
    this.state = {title: props.title};
  }
  _onPressButton()
  {
    console.log("OK");
  }
  render() {
      return (
        <ScrollView>
          <Text style={{fontSize:96}}>{this.state.title}</Text>
          <TouchableHighlight onPress={this._onPressButton}>
            <Image source={require('../papy.png')} />
          </TouchableHighlight>
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Text style={{fontSize:96}}>If you like</Text>
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Text style={{fontSize:96}}>Scrolling down</Text>
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Text style={{fontSize:96}}>What's the best</Text>
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Text style={{fontSize:96}}>Framework around?</Text>
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Image source={require('../papy.png')} />
          <Text style={{fontSize:80}}>React Native</Text>
        </ScrollView>
    );
  }
}

export default ListVue;