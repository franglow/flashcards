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
import { AppLoading} from 'expo'
import { recieveDecks } from '../actions'
import { submitDeckTitle, getDecks } from '../utils/api'
import ShowDecksOnList from './ShowDecksOnList'

class DeckList extends Component {
	state = {
		decks: null
	}

  componentDidMount () {
		const { dispatch } = this.props
    getDecks()
    	.then((decks) => dispatch(recieveDecks(decks)))
			.then(({decks}) => {
			})
  }

	_getItem = ({item}) => (
		<TouchableOpacity onPress={() => this.props.navigation.navigate(
				'DeckView',{item}
		)}>
			<ShowDecksOnList deck={item} />
		</TouchableOpacity>
  )

	render() {
		const { getDecks, entries } = this.props
		if (!entries) {
			return <AppLoading />
		}
		return (
			<View style={styles.container}>
	      <FlatList
	        data={Object.values(entries.decks)}
	        renderItem={this._getItem}
					keyExtractor={(item) => item.title}
	      />
	    </View>
		)
	}
}

const mapStateToProps = (entries) => ({entries})

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
	container: {
		flex: 1,
    padding: 22,
	},
	row: {
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
