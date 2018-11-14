import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class ShowDecksList extends Component {
  _onPress = () => {
    alert('Hi!')
  }
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this._onPress}>
          <Text style={styles.item}>{this.props.deck.title}</Text>
          <Text>{this.props.deck.questions.length} cards</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 50,
    height: 120,
  }
})
