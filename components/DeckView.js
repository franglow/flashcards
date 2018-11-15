import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {

	render() {
		const { item } = this.props.navigation.state.params
		console.log(
			'DeckView render this.props',
			this.props
		)
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.headerText}>{item.title}</Text>
					<Text style={styles.cardText}>{item.questions.length} cards</Text>
				</View>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(
						'AddCard',{item}
				)}>
					<Text>Add Card</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => this.props.navigation.navigate(
						'QuizView',{item}
				)}>
					<Text>Start Quiz</Text>
				</TouchableOpacity>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
	},
	row: {
	},
	headerText: {
		fontSize: 55,
    textAlign: 'center',
	},
	cardText: {
		fontSize: 45,
    textAlign: 'center',
	},
	btn: {
		backgroundColor: '#E53224',
		borderColor: '#E53224',
		borderWidth: 0.5,
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	btnText: {
		color: '#fff'
	},
	btnStart: {
		backgroundColor: '#fff',
		borderColor: '#000',
		borderWidth: 0.5,
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	btnTextStart: {
		color: '#000'
	}
})
 export default connect()(DeckView)
