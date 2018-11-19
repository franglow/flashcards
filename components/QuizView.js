import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux'


class QuizView extends Component {

	state = {
		card: 0,
		questionString: 'question',
		questionText: 'Answer',
		score: 0
	}

	_onPress = ( index, length, score ) => {
		if (score) {
			const accumScore = ++this.state.score
			this.setState(() => {
				score: accumScore
			})
		}

		if ((index + 1) > (length -1)) {
			const { item } = this.props.navigation.state.params
			alert("Your score is " + this.state.score + "!!!")
			this.props.navigation.navigate(
					'DeckView',{item}
			)
		} else {
			this.setState(() => ({
				card : index + 1,
				questionString : 'question',
				questionText: 'Answer'
			}))
		}
	}

	_switchToAnswer = () => {
		if (this.state.questionString === 'question') {
			this.setState(() => ({
				questionString : 'answer',
				questionText: 'Question'
			}))
		} else {
			this.setState(() => ({
				questionString : 'question',
				questionText: 'Answer'
			}))
		}
	}

	static navigationOptions = ({navigation}) => {
		const { item } = navigation.state.params
		const quiz = 'Quiz'
		return {
			title: quiz
		}
	}

	render () {
		const { item } = this.props.navigation.state.params
		const length = item.questions.length
		const index = this.state.card
		const { questionText } = this.state

	  return (
	    <View style={styles.container}>
				<View style={styles.rowTop}>
					<Text> {index + 1 }/{ length }</Text>
				</View>
				<View style={styles.row}>
					<Text style={styles.headerText}>
						{item.questions[index][this.state.questionString]}
					</Text>
					<TouchableOpacity onPress={() => { this._switchToAnswer() }
				}>
						<Text style={styles.linkText}>{questionText}</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.btnGreen} onPress={() => {
							this._onPress(index,length,1)}
					}>
						<Text style={styles.btnText}>Correct</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnRed} onPress={() => {
							this._onPress(index,length,0)
						}}>
						<Text style={styles.btnText}>Incorrect</Text>
					</TouchableOpacity>
				</View>
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

export default connect()(QuizView)
