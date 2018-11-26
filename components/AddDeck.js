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

	state = {
		card: 0
	}

  clearForm = () => {
    // clear content from all textbox
    this.setState(() => ({}));
  }

  handleSubmit = () => {
		// getting form value
    const value = this._form.getValue() && this._form.getValue().deckTitle
    const { dispatch } = this.props

    if (value) {
      // Update ReduxStore
      dispatch(addEntry({
        decks: {
          [value] : {
            title: value,
            questions: []
          }
        }
      }))

			// Update AsyncStorage
			submitDeckTitle({value})

			//clear Notification
			clearLocalNotification()
				.then(setLocalNotification)

			this.toHome()
    }
  }

	toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'AddDeck'}))
  }

	render() {
		return (
      <View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={Deck}
          options={options}
          value={this.state}
        />
        <Button
          title='Submit'
          onPress={this.handleSubmit}
        />
      </View>
		)
	}
}

function mapStateToProps (state) {
  return {
    state
  }
}

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

export default connect(mapStateToProps)(AddDeck)
