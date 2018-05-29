import React, { Component } from 'react'
import { View, Platform, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { white, purple } from '../utils/colors' 
import t from 'tcomb-form-native'

function SubmitBtn ({ onPress }) {
	return (
		<TouchableOpacity
			style={Platform.OS === 'ios' ? styles.iosSubmitBtn : styles.AndroidSubmitBtn}
			onPress={onPress}>
			<Text style={styles.submitBtnText}>SUBMIT</Text>

		</TouchableOpacity>
	)
}

class AddCard extends Component {

	submit = () => {
		// set state
		// update redux
		// Navigate to home
		// save to 'DB'
		// Clear local notification
	}
  

	render() {
		return (
			<View style={styles.container}>
				<Text>Add Card</Text>
				<SubmitBtn onPress={this.submit} />
			</View>
		)
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

export default AddCard
