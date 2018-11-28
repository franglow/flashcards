import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class DeckView extends Component {
	state = {
		card: 0
	}
	static navigationOptions = ({navigation}) => (
		{ title: navigation.state.params.item.title }
	)

	render() {
		const { item,title,length } = this.props
		return (
			<View style={styles.container}>
				<View style={styles.row}>
					<Text style={styles.headerText}>{title}</Text>
					<Text style={styles.cardText}>
						{length > 1 ? `${length} cards` : `${length} card`}
					</Text>
				</View>
				<View style={styles.row}>
					<TouchableOpacity style={styles.btnLight} onPress={() =>
						this.props.navigation.navigate(
							'AddCard',{item}
					)}>
						<Text style={styles.btnLightText}>Add Card</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnDark} onPress={() => {
								if (length) {
									return this.props.navigation.navigate(
										'QuizView',{item})
								} else {
									return this.props.navigation.navigate(
										'AddCard',{item})
								}
							}
						}>
						<Text style={styles.btnDarkText}>Start Quiz</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}
}

const mapStateToProps = (state, ownProps) => ({
		item: ownProps.navigation.state.params,
		title: ownProps.navigation.state.params.item.title,
		length: ownProps.navigation.state.params.item.questions.length,
})

export default connect(mapStateToProps)(DeckView)

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
	},
	row: {
		padding: 40
	},
	headerText: {
		fontSize: 35,
    textAlign: 'center',
	},
	cardText: {
		fontSize: 25,
    textAlign: 'center',
	},
	btnLight: {
		backgroundColor: '#FFF',
		borderColor: '#000',
		borderWidth: 0.5,
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		marginBottom: 5
	},
	btnDark: {
		backgroundColor: '#000',
		borderColor: '#fff',
		borderWidth: 0.5,
		padding: 10,
		paddingLeft: 50,
		paddingRight: 50,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
	},
	btnDarkText: {
		color: '#fff'
	},
	btnLightText: {
		color: '#000'
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
