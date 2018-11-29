import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux'

class ResultsView extends Component {

	static navigationOptions = () => ({header: null})

	render () {
    const { item } = this.props.navigation.state.params
	  return (
	    <View style={styles.container}>
				<View style={styles.row}>
					<TouchableOpacity style={styles.btnGreen}
            onPress={() => this.props.navigation.navigate('QuizView',{item})}>
						<Text style={styles.btnText}>Start Quiz Over</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.btnRed}
            onPress={() => this.props.navigation.navigate('DeckView',{item})}>
						<Text style={styles.btnText}>Go back to Deck</Text>
					</TouchableOpacity>
          <TouchableOpacity style={styles.btnBlk}
            onPress={() => this.props.navigation.popToTop()}>
						<Text style={styles.btnText}>Back to Home</Text>
					</TouchableOpacity>
				</View>
	    </View>
	  )
	}
}

export default connect()(ResultsView)

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
  btnBlk: {
    backgroundColor: '#000',
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
