import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux'


class QuizView extends Component {
	// Acá debería recibir por parametros el key para mostrar
	// la flashcard. Algo asi como la linea siguiente.
	// static navigationOptions = ({ navigation }) => { const { entryId } = navigation.state.params }
	render () {
		const { item } = this.props.navigation.state.params
console.log('QuizView render item.',item.questions)
	  return (
	    <View>
				<View style={styles.row}>					
					<Text style={styles.headerText}>{item.questions[0].question}</Text>
					<Text style={styles.cardText}>ver respuesta</Text>
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

export default connect()(QuizView)
