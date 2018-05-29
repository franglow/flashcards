import React, { Component } from 'react'
import { AsyncStorage,
				 View,
				 Text, 
				 StyleSheet, 
				 ScrollView, 
				 FlatList,
				 TouchableOpacity,
				 RefreshControl } from 'react-native'
import { getCardsMetaInfo } from '../utils/helpers'
import { submitDeckTitle, getDecks, getDeck } from '../utils/api'
import { connect } from 'react-redux'
import { recieveDecks } from '../actions'
/*
Por el momento estoy viendo como viene la mano para utilizar el mapStateToProps definido al final,
como pasarlo como props a la clase.
*/

const hasOwnProperty = Object.prototype.hasOwnProperty;

class DeckList extends Component {

	state = {
		decks: null
	}

  componentDidMount () {
		// const { entries } = this.props
		// const { dispatch } = this.props
// console.log('componentDidMount entries', entries)
// console.log('this.props', this.props)		
    // getDecks()
    	// .then((entries) => dispatch(recieveDecks(entries)))
    	// .then( (entries) => this.setState({decks : entries}) )
    	// .then( (entries) => console.log('entries en getdecks didimonte',entries) )
    	// .then( (valores) => console.log('entries en getdecks didimonte swei',valores) )
   //  this.props.navigation.addListener('willFocus', 
  	// 	(cosas) => {
   //  		console.log('cosas en el addListener',cosas)
			//   console.log('entries en getdecks didimonte addListener', entries)
			//   console.log('this.state', this.state)
			//   console.log('this.nextState', this.props.nextState)
  	// 	}
  	// )
		// const hola = dispatch(recieveDecks())
		// console.log('hola',hola)  	
  }

	// Este codigo no está en uso todavia !!!
	// renderItem = (items) =>	{Object.keys(decks).map((key) => {
	// 				const { title, questions,  ...rest } = decks[key]
	// 				return (
	// 					<View key={key}>
	// 						<Text style={styles.headerText}>
	// 							{title}
	// 						</Text>
	// 						<Text style={styles.cardText}>
	// 							{questions.length}
	// 						</Text>		
	// 					</View>
	// 				)
	// 			})}
	
	render() {
//FIXME
		// if (!isEmpty(this.state) && this.state.decks) {
		if (!isEmpty(this.state) ) {
//FIXME			

			// console.log('decks tendra: ',this.state)
			// const decks = this.state.decks

			// const newScreen = () => this.props.navigation.navigate('AddCard')
	  // 	console.log(newScreen)

			return (
				<ScrollView 
					// style={styles.container}
				>
					{/* Object.keys(decks) retornara un array que solamente contendrá los nombres "key" de los decks.
					  * Lo que haré en la linea siquiente del object es un destructuring del array decks[key] 
					  * el cual recibiá la "key"(nombre del deck) para armar las variables por separado.
					*/}
{/*
Viendo lo del principio de Reconciliation debo probar sacar el <View> a fuera de la iteracion y agregarle un <ul> como hijo,
luego dentro de la iteracion agrego los <li> con su correcpondiente key={} para crear una lista ordenada y mejor performante()aparentemente.
*/}
							{/*} {Object.keys(decks).map((key) => {  
//FIXME
										// console.log('loopeando en DeckList',key)
										// const { title, questions,  ...rest } = decks[key]
										// console.log('title', title)
										// return (
										// 	<View key={key}>
										// 		<TouchableOpacity 
										// 			onPress={() => this.props.navigation.navigate(
										// 				'DeckView',
										// 				{ deckId: key } 
										// 		)}>
										// 			<Deck deck={title} cards={questions}/>
										// 		</TouchableOpacity>
										// 	</View>
										// )
							// })}
								
	{/*}
							<FlatList 
								data={Object.keys(decks)}
								renderItem={(item) => (
									const { title, questions,  ...rest } = decks[item]
									return (
									<View key={key}>
										<Deck deck={title} cards={questions}/>
										</View>
									)
								)}
							/>
	{*/}				
				</ScrollView>
			) 



		}

		return (
			<View>
				<Text>Nada</Text>
			</View>
		)


	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    // padding: 20,
    // backgroundColor: white
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
	}
})

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0)    return false;
    if (obj.length === 0)  return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}

function Deck ({ deck, cards }) {
	return (
			<View style={styles.row}>
				<Text style={styles.headerText}>
					{deck}
				</Text>
				<Text style={styles.cardText}>
					{
					//cards && (cards.length >= 0) ? cards.length+' cards' : 'no cards'} 
				}
				</Text>				
			</View>
	)
}

function mapStateToProps (entries) {
console.log('mapStateToProps entries',entries)	
  return {
    entries
  }
}

// function mapDispatchToProps (dispatch) {
//   return {
//     getDecks: dispatch(recieveDecks())
//   }
// }

export default connect(mapStateToProps)(DeckList)
// export default connect(mapStateToProps,mapDispatchToProps)(DeckList)
// export default DeckList