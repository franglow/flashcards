import { AsyncStorage } from 'react-native'
import { getCardsMetaInfo } from './helpers'

export const DECK_STORAGE_KEY = 'FlashCards:deck'

export function submitDeckTitle ({ value }) {
	let newDeckToAdd = {
    [value] : {
      title: value,
      questions: [{}]
    }
 	}
 	console.log('at API submitDeckTitle', newDeckToAdd)
	return AsyncStorage.mergeItem('FlashCards:deck', JSON.stringify(newDeckToAdd), () => {
			AsyncStorage.getItem('FlashCards:deck', (err, result) => {
				console.log('API.js AsyncStorage.getItem',result) }) 
		})
}

export function submitCardToDeck ({ title, card}) {
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
	}))
}

export function getDeck (title) {
  return AsyncStorage.getItem(title)
  	.then( (results) => (
  	  results
  	))
}

export function getDecks () {
	return AsyncStorage.getItem('FlashCards:deck', (err, result) => {
	}).then( (result) => JSON.parse(result)
	)
}

// export function removeEntry (key) {
//   return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
//     .then((results) => {
//       const data = JSON.parse(results)
//       data[key] = undefined
//       delete data[key]
//       AsyncStorage.setItem(CALENDAR_STORAGE_KEY, JSON.stringify(data))
//     })
// }
