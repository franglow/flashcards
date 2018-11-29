import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'

class QuizView extends Component {
	state = {
		card: 0,
		mainText: 'question',
		linkText: 'Answer',
		score: 0
	}

	_scoreItOnPress = ( index, length, score ) => {
		if (score) {
			const accumScore = ++this.state.score
			this.setState(() => {
				score: accumScore
			})
		}

		//check for last question
		if ((index + 1) > (length - 1)) {
			const { item } = this.props
			this.props.navigation.navigate('ResultsView',{item})
			// alert("Your score is " + this.state.score + "!!!")
// FIXME: add a popup or component here!
			// this.props.navigation.goBack()
		} else {
			this.setState(() => ({
				card : index + 1,
				mainText : 'question',
				linkText: 'Answer'
			}))
		}
	}

	_toggleToAnswer = () => {
		if (this.state.mainText === 'question') {
			this.setState(() => ({
				mainText : 'answer',
				linkText: 'Question'
			}))
		} else {
			this.setState(() => ({
				mainText : 'question',
				linkText: 'Answer'
			}))
		}
	}

	static navigationOptions = (initialRouteName) => ({
		title: 'quiz',
		initialRouteName: 'DeckView',
	})

	render () {
		const index = this.state.card
		const { linkText } = this.state
		const { item, questions } = this.props

	  return (
	    <View style={styles.container}>
				<View style={styles.rowTop}>
					<Text> {index + 1 }/{ questions.length }</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.headerText}>
						{questions[index][this.state.mainText]}
					</Text>
					<TouchableOpacity onPress={() => { this._toggleToAnswer() }
				}>
						<Text style={styles.linkText}>{linkText}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.btnGreen} onPress={() => {
							this._scoreItOnPress(index,questions.length,1)}
					}>
						<Text style={styles.btnText}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnRed} onPress={() => {
							this._scoreItOnPress(index,questions.length,0)
						}}>
						<Text style={styles.btnText}>Incorrect</Text>
					</TouchableOpacity>
				</View>
	    </View>
	  )
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		state,
		item: ownProps.navigation.state.params.item,
		questions: ownProps.navigation.state.params.item.questions,
	}
}

export default connect(mapStateToProps)(QuizView)

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
	},
	subHeaderSection: {
		top: 0
	},
	rowTop : {
		paddingTop: 0,
		paddingBottom: 40
	},
	row: {
		paddingBottom: 40
	},
	headerText: {
		fontSize: 45,
    textAlign: 'center',
	},
	linkText: {
		color: '#E53224',
		fontSize: 15,
    textAlign: 'center',
	},
	btnRed: {
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
	btnGreen: {
		backgroundColor: '#128401',
		borderColor: '#128401',
		borderWidth: 0.5,
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginBottom: 5
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
