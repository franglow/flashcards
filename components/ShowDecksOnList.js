import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

export default class ShowDecksOnList extends Component {

  render() {
    const length = this.props.deck.questions.length
    return (
      <View style={styles.row}>
				<Text style={styles.headerText}>
          {this.props.deck.title}
        </Text>
        <Text style={styles.cardText}>
          {length > 1 ? `${length} cards` : `${length} card`}
        </Text>
			</View>
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
