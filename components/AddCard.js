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

  clearForm = () => {
    // clear content from all textbox
    this.setState(() => ({}));
  }

  handleSubmit = () => {
		// getting form value
    const value = this._form.getValue() && this._form.getValue()
    const { dispatch } = this.props

    if (value) {
console.log('AddCard handleSubmit value',value)
      // // Update ReduxStore
      // dispatch(addEntry({
      //   decks: {
      //     [value] : {
      //       title: value,
      //       questions: [{}]
      //     }
      //   }
      // }))
      // // Reset del state
      // this.setState({
      //   decks: {
      //     [value] : {
      //       title: value,
      //       questions: [{}]
      //     }
      //   }
      // })
			// // Update AsyncStorage
			// submitDeckTitle({value})

			this.toHome()
    }
  }

	toHome = () => {
    this.props.navigation.dispatch(NavigationActions.back({key: 'DeckView'}))
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

export default connect(mapStateToProps)(AddCard)
