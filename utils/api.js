import { AsyncStorage } from 'react-native'
import { getCardsMetaInfo } from './helpers'

export const DECK_STORAGE_KEY = 'FlashCards:deck'

export function submitDeckTitle ({ value }) {
	let data = {
    [value] : {
      title: value,
      questions: []
    }
 	}
	return AsyncStorage.mergeItem('FlashCards:deck', JSON.stringify(data), () => {
			AsyncStorage.getItem('FlashCards:deck', (err, result) => {
				// console.log('api.js getItem OK',result) 
			})
		})
}

export function submitCardToDeck ({ data }) {
	return AsyncStorage.mergeItem('FlashCards:deck', data, () => {
			AsyncStorage.getItem('FlashCards:deck', (err, result) => {
				// console.log('api.js getItem OK',result)
			})
		})
}

export function getDecks () {
	return AsyncStorage.getItem('FlashCards:deck', (err, result) => {
	}).then( (result) => JSON.parse(result)
	)
}
