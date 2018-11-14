import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AsyncStorage,
				 View,
				 Text,
				 StyleSheet,
				 ScrollView,
				 FlatList,
				 TouchableOpacity,
				 RefreshControl
} from 'react-native'
import { getCardsMetaInfo } from '../utils/helpers'
import { recieveDecks } from '../actions'
import { submitDeckTitle, getDecks } from '../utils/api'
import ShowDecksList from './ShowDecksList'

const hasOwnProperty = Object.prototype.hasOwnProperty;

class DeckList extends Component {

	state = {
		decks: null
	}

  componentDidMount () {
		const { entries, dispatch } = this.props
// FIXME:
		console.log('componentDidMount DeckList.js entries', entries)
		console.log('componentDidMount DeckList.js this.props', this.props)
    getDecks()
    	.then((decks) => dispatch(recieveDecks(decks)))
   //  this.props.navigation.addListener('willFocus',
  		// (cosas) => {
   //  		console.log('cosas en el addListener',cosas)
			//   console.log('this.nextState', this.props.nextState)
  	// 	}
  	// )
  }

	/*
	* El componente FlatList necesita una key, para actualizar el contenido, esta
	* es una forma piola de pasarle el item actual y el index de los cuales
	* dinamicamente se ira generando cada una de las key para cada item de la
	* lista.
	*/
	_keyExtractor = (item, index) => item.title

	/*
	* a traves de item recibira cada uno de los valores del array pasado
	* a traves de la property data del componente FlatList.
	*/
	_getItem = ({item}) => (
		<ShowDecksList
			deck={item}
		/>
  )

	render() {
		const { getDecks, entries } = this.props
		return (
			<View style={styles.container}>
	      <FlatList
	        data={Object.values(entries.decks)}
	        renderItem={this._getItem}
					keyExtractor={this._keyExtractor}
	      />
	    </View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 22,
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
	},
	item: {
    padding: 10,
    fontSize: 50,
    height: 120,
  }
})

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

/*
* mapStateToProps recibiá las funciones exportadas
*	desde ./reducers/index.js
*/
function mapStateToProps (entries) {
console.log('DeckList.js mapStateToProps entries',entries)
  return {
    entries
  }
}

export default connect(mapStateToProps)(DeckList)
