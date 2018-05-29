import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { getCardsMetaInfo } from '../utils/helpers'


// export default function MetricCard ({ deck }) {
// export default function MetricCard ({ 'JavaScript' }) {
// 	return (
// 			<View style={styles.container}>
// 				<Text style={styles.headerText}>
// 					{getCardsMetaInfo('JavaScript').title}
// 				</Text>
// 			</View>
// 	)
// }

export default class DeckView extends Component {
	// Acá debería recibir por parametros el key para mostrar 
	// la flashcard. Algo asi como la linea siguiente.
	// static navigationOptions = ({ navigation }) => { const { entryId } = navigation.state.params }
	handlePress = () => {
		alert('Me queres?')
	}
	handlePress1 = () => {
		alert('Me queres?')
	}
	render() {
		const metaInfo = getCardsMetaInfo()

		return (
			<View>
				<Text>Deck View - {this.props.navigation.state.params.deckId}</Text>
			</View>
		)
		// return (
		// 	<View style={styles.container}>
		// 		<Text style={styles.headerText}>
		// 			{getCardsMetaInfo('React').title}
		// 		</Text>
		// 		<Text style={styles.cardsText}>
		// 			{getCardsMetaInfo('React').questions.length} cards
		// 		</Text>
		// 		<TouchableOpacity style={styles.btn} onPress={styles.handlePress}>
		// 			<Text style={styles.btnText}>Add Card</Text>
		// 		</TouchableOpacity>
		// 		<TouchableOpacity style={styles.btnStart} onPress={styles.handlePress1}>
		// 			<Text style={styles.btnTextStart}>Start Quiz</Text>
		// 		</TouchableOpacity>				
		// 	</View>
		// )
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
	},
	headerText: {
		fontSize: 35,
    textAlign: 'center',
	},
	cardsText: {
		fontSize: 20,
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
