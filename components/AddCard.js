import React, { Component } from 'react'
import {
	View,
	Platform,
	TouchableOpacity,
	Text,
	StyleSheet,
	Button,
	TextInput
} from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import t from 'tcomb-form-native'
import { submitCardToDeck } from '../utils/api'
import { addCard } from '../actions'
import { white, purple } from '../utils/colors'

const Form = t.form.Form;

const Card = t.struct({
	question: t.String,
	answer: t.String
})

const options = {
  fields: {
    question: {
      label: 'Add a new question',
      error: 'Please add a question!'
    },
		answer: {
			label: 'Add an answer',
      error: 'Please add an answer!'
		}
  },
	stylesheet: formStyles
}




class AddCard extends Component {

	static navigationOptions = ({navigation}) => {
		const { item } = navigation.state.params
		const addCard = 'Add Card'
		return {
			title: addCard
		}
	}

  clearForm = () => {
    // clear content from all textbox
    this.setState(() => ({}));
  }

	_toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'DeckView'}))
  }

  handleSubmit = () => {
		// getting form values
    const question = this._form.getValue() && this._form.getValue().question
		const answer = this._form.getValue() && this._form.getValue().answer
    const { setCard } = this.props
		const { item } = this.props.navigation.state.params
		const { decks } = this.props.state

		if (question && answer) {
      // Update ReduxStore
			setCard({title:item.title , question: question, answer: answer})

			let data = {
					[item.title] : decks[item.title]
			}
			data = JSON.stringify(data)
			// Update AsyncStorage
			submitCardToDeck({data})

			this._toHome()
    }
  }

	render() {
		return (
			<View style={styles.container}>
        <Form
          ref={c => this._form = c}
          type={Card}
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
		flex: 1,
		padding: 20,
		backgroundColor: white
	},
  iosSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    borderRadius: 7,
    height: 45,
    marginLeft: 40,
    marginRight: 40,
  },
  AndroidSubmitBtn: {
    backgroundColor: purple,
    padding: 10,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    color: white,
    fontSize: 22,
    textAlign: 'center',
  },
})

// function mapStateToProps (entries) {
function mapStateToProps (state) {
  return {
    state
  }
}

function mapDispatchToProps (dispatch) {
	return {
		setCard: (data) => dispatch(addCard({data}))
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddCard)
