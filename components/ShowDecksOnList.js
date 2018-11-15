import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class ShowDecksOnList extends Component {
  _onPress = () => {
    console.log('ShowDecksList this.props :', this.props)
    alert("ok!")
  }

  render() {
    return (
      <View style={styles.row}>
				<Text style={styles.headerText}>{this.props.deck.title}</Text>
				<Text style={styles.cardText}>{this.props.deck.questions.length} cards</Text>
			</View>
      // <View>
      //   <TouchableOpacity onPress={this._onPress}>
      //     <Text style={styles.item}>{this.props.deck.title}</Text>
      //     <Text>{this.props.deck.questions.length} cards</Text>
      //   </TouchableOpacity>
      // </View>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 50,
    height: 120,
  },
  row: {
    // flexDirection: 'row',
    // flex: 1,
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 20
  },
  headerText: {
    fontSize: 35,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 20,
    textAlign: 'center',
  }
})
