import React, { Component } from 'react'
import {
	View,
	Text,
	StyleSheet,
	Button,
	TextInput
	} from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import { NavigationActions } from 'react-navigation'
import { submitDeckTitle, getDecks } from '../utils/api'
import {
	clearLocalNotification,
	setLocalNotification
} from '../utils/helpers'
import { addEntry, recieveDecks } from '../actions'

const Form = t.form.Form;
const Deck = t.struct({
	deckTitle: t.String,
})
const options = {
  fields: {
    deckTitle: {
      label: 'What is the tile of your new deck',
      error: 'Please add a title!'
    }
  },
	stylesheet: formStyles
}

class AddDeck extends Component {

  _handleSubmit = () => {
		// getting form value
    const value = this._form.getValue() && this._form.getValue().deckTitle
    const { dispatch, setDeck } = this.props
    if (value) {
      // Update ReduxStore and return new value added.
			let item = setDeck({
        decks: {
          [value] : {
            title: value,
            questions: []
          }
        }
      })
			// Update AsyncStorage
			submitDeckTitle({value})

			//Clear App Notifications
			clearLocalNotification()
				.then(setLocalNotification)

			// Navigato to the just added new deck.
			item = item.deck.decks[value]
			// this.props.navigation.navigate('DeckView',{item})
			this.props.navigation.goBack()
    }
  }

	render() {
		return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={Deck}
          options={options}
        />
        <Button
          title='Submit'
          onPress={this._handleSubmit}
        />
      </View>
		)
	}
}

const mapStateToProps = (state) => ({state})

const mapDispatchToProps = (dispatch) => ({
	setDeck: (deck) => dispatch(addEntry(deck))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddDeck)

const formStyles = {
  ...Form.stylesheet,
  controlLabel: {
    normal: {
      color: 'blue',
      fontSize: 35,
      marginBottom: 7,
      fontWeight: '600'
    },
    error: {
      color: 'red',
      fontSize: 18,
      marginBottom: 7,
      fontWeight: '600'
    }
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
