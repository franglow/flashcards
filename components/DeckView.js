import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

class DeckView extends Component {
	// Acá debería recibir por parametros el key para mostrar
	// la flashcard. Algo asi como la linea siguiente.
	// static navigationOptions = ({ navigation }) => { const { entryId } = navigation.state.params }

	render() {
		console.log('DeckView render this.props',this.props)
		return (
			<View>
				<Text>Deck View </Text>
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
	row: {
    // flexDirection: 'row',
    // flex: 1,
    // alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 20
	},
	headerText: {
		fontSize: 35,
    textAlign: 'center',
	},
	cardText: {
		fontSize: 20,
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
